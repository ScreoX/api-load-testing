package load;

import java.time.Duration;

import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class TeamsSimulation extends Simulation {
    private final int users = Integer.getInteger("users", 5);
    private final int ramp = Integer.getInteger("ramp", 10);
    private final int duration = Integer.getInteger("duration", 70);
    private final int think = Integer.getInteger("think", 200);

    private final HttpProtocolBuilder protocol = http
        .baseUrl("http://127.0.0.1:8088")
        .acceptHeader("application/json")
        .disableCaching();

    private final ScenarioBuilder scenario = scenario("Read teams from CSV")
        .forever().on(
            feed(csv("teams.csv").circular()),
            pause(Duration.ofMillis(think)),
            exec(http("GET /team/get")
                .get("/team/get")
                .queryParam("team_name", "#{team_name}")
                .check(status().is(200))
                .check(jsonPath("$.team_name").isEL("#{team_name}"))
                .check(jsonPath("$.members[*]").count()
                    .is(session -> Integer.parseInt(session.getString("member_count")))))
        );

    {
        if (users < 1 || ramp < 1 || duration <= ramp || think < 0) {
            throw new IllegalArgumentException("Invalid load profile");
        }
        setUp(scenario.injectClosed(
            rampConcurrentUsers(0).to(users).during(Duration.ofSeconds(ramp)),
            constantConcurrentUsers(users).during(Duration.ofSeconds(duration - ramp))
        ))
            .protocols(protocol)
            .maxDuration(Duration.ofSeconds(duration))
            .assertions(global().failedRequests().count().is(0L));
    }
}
