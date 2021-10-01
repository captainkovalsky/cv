#!/usr/bin/env bash

source "$PWD/.env"
ssh $USER@$IP_ADDRESS "cd cv && docker-compose down && docker-compose build && docker-compose up -d"