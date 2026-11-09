#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
git submodule update --init --recursive
mkdir -p .tools

download() {
    local name=$1 url=$2
    if [ ! -f ".tools/$name" ]
    then
        curl --fail --location --retry 3 "$url" -o ".tools/$name.part"
        mv ".tools/$name.part" ".tools/$name"
    fi
}

verify() {
    local name=$1 expected actual
    expected=$(awk 'NR == 1 {print $1}' ".tools/$name.sha512")
    if command -v sha512sum >/dev/null
    then
        actual=$(sha512sum ".tools/$name" | cut -d ' ' -f 1)
    else
        actual=$(shasum -a 512 ".tools/$name" | cut -d ' ' -f 1)
    fi
    if [ "$actual" != "$expected" ]
    then
        echo "Checksum mismatch: $name" >&2
        exit 1
    fi
}

if [ ! -x .tools/apache-jmeter-5.6.3/bin/jmeter ]
then
    name=apache-jmeter-5.6.3.tgz
    download "$name" "https://archive.apache.org/dist/jmeter/binaries/$name"
    download "$name.sha512" "https://archive.apache.org/dist/jmeter/binaries/$name.sha512"
    verify "$name"
    tar -xzf ".tools/$name" -C .tools
fi

if [ ! -x .tools/apache-maven-3.9.9/bin/mvn ]
then
    name=apache-maven-3.9.9-bin.tar.gz
    url="https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.9/$name"
    download "$name" "$url"
    download "$name.sha512" "$url.sha512"
    verify "$name"
    tar -xzf ".tools/$name" -C .tools
fi

echo "Service submodule, JMeter and Maven are ready"
