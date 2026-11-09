FROM golang:1.26-alpine AS builder

ENV CGO_ENABLED=0
WORKDIR /src
COPY pr-service/ .
RUN go build -o /pr-service ./cmd/pr_service \
    && go install github.com/pressly/goose/v3/cmd/goose@v3.19.1

FROM alpine:3.24.4

RUN apk add --no-cache curl && adduser -D app
COPY --from=builder /pr-service /usr/local/bin/pr-service
COPY --from=builder /go/bin/goose /usr/local/bin/goose
COPY pr-service/migrations/ /migrations/
USER app
CMD ["sh", "-c", "goose up && exec pr-service"]
