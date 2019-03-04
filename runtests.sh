#!/usr/bin/env bash

function cleanup() {
  docker-compose rm -f -s
}
trap cleanup EXIT

set -e

docker-compose build
docker-compose run --rm -e CYPRESS_baseUrl=http://app:3000 cypress