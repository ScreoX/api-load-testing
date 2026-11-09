#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
mode=${1:-all}
output=${2:-results/run-$(date +%Y%m%d-%H%M%S)}
ramp=10
duration=70

if [ "$mode" != all ] && [ "$mode" != smoke ]
then
    echo "Usage: ./scripts/run.sh [all|smoke] [new-output-directory]" >&2
    exit 1
fi
if [ -z "${JAVA_HOME:-}" ] && [ "$(uname -s)" = Darwin ]
then
    export JAVA_HOME=$(/usr/libexec/java_home -v 17)
fi
if [ -n "${JAVA_HOME:-}" ]
then
    export PATH="$JAVA_HOME/bin:$PATH"
fi

jmeter="$PWD/.tools/apache-jmeter-5.6.3/bin/jmeter"
maven="$PWD/.tools/apache-maven-3.9.9/bin/mvn"
if [ ! -x "$jmeter" ] || [ ! -x "$maven" ] || [ ! -f service/pr-service/go.mod ]
then
    echo "Run ./scripts/setup.sh first" >&2
    exit 1
fi
if [ -e "$output" ]
then
    echo "Output directory already exists: $output" >&2
    exit 1
fi
if curl --silent --max-time 1 http://127.0.0.1:8088/stats > /dev/null
then
    echo "Port 8088 is occupied" >&2
    exit 1
fi

mkdir -p "$output/jmeter" "$output/gatling"
output=$(cd "$output" && pwd)
project="api-load-testing-$$"
compose=(docker compose -p "$project" -f service/docker-compose.yml)
cleanup() {
    "${compose[@]}" logs --no-color > "$output/service.log" 2>&1 || true
    "${compose[@]}" down --timeout 10 > "$output/cleanup.log" 2>&1 || true
}
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

"${compose[@]}" up --build --detach --wait --wait-timeout 120
go run ./cmd/seed

export HEAP="-Xms256m -Xmx512m"
"$jmeter" -n -t jmeter/teams.jmx -Jusers=1 -Jramp=0 -Jduration=5 -Jloops=1 \
    -Jsample_variables=team_name,member_count -l "$output/jmeter/smoke.jtl" -j "$output/jmeter/smoke.log"
go run ./cmd/metrics -check "$output/jmeter/smoke.jtl"

gatling_run() {
    local destination="$output/gatling/$1"
    "$maven" -B -ntp -f gatling/pom.xml clean gatling:test \
        -Dgatling.simulationClass=load.TeamsSimulation \
        -Dusers="$2" -Dramp="$3" -Dduration="$4" -Dthink=200
    local reports=(gatling/target/gatling/teamssimulation-*)
    if [ "${#reports[@]}" -ne 1 ] || [ ! -f "${reports[0]}/index.html" ]
    then
        echo "Expected one Gatling report" >&2
        exit 1
    fi
    mv "${reports[0]}" "$destination"
}

if [ "$mode" = smoke ]
then
    gatling_run smoke 1 1 3
    echo "Smoke checks passed: $output"
    exit 0
fi

for users in 5 15 30
do
    "$jmeter" -n -t jmeter/teams.jmx -Jusers="$users" -Jramp="$ramp" -Jduration="$duration" \
        -Jsample_variables=team_name,member_count -l "$output/jmeter/users-$users.jtl" -j "$output/jmeter/users-$users.log"
    go run ./cmd/metrics -check "$output/jmeter/users-$users.jtl"
done
"$jmeter" -g "$output/jmeter/users-30.jtl" -o "$output/jmeter/report" \
    -Jsample_variables=team_name,member_count -Jjmeter.reportgenerator.overall_granularity=1000 -j "$output/jmeter/report.log"

for users in 5 15 30
do
    gatling_run "users-$users" "$users" "$ramp" "$duration"
done

go run ./cmd/metrics -duration "$duration" "$output" > "$output/summary.csv"
echo "Experiment complete: $output/summary.csv"
