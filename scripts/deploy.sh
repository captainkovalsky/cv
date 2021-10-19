#!/usr/bin/env bash

source "$PWD/.env"

ssh $USER@$IP_ADDRESS << EOF
  set -e;
  cd cv;
  git fetch --all;
  git reset --hard origin/main;
  echo "DEPLOY $(git rev-parse --short HEAD)";
  cd scripts;
  docker-compose build;
  docker-compose down;
  docker-compose up -d;
  cd -;
EOF