#!/bin/bash

FRONT_IMAGE="app-medic-front"
FRONT_CONTAINER="app-medic-front"


setup_front() {
    npm install
    cd ..
}



build_front() {
    setup_front
    docker build -t $FRONT_IMAGE .
}



start_front() {
    docker run -d --name $FRONT_CONTAINER -p 443:443 $FRONT_IMAGE
}

start() {
    start_front
}

stop() {
    docker stop $FRONT_CONTAINER || true
    docker rm $FRONT_CONTAINER || true
}

pre_commit() {
    pre-commit run --all-files
}

clean() {
    stop
    docker rmi  $FRONT_IMAGE || true
}

all() {

    build_front
}

case "$1" in
    "setup-front")
        setup_front
        ;;
    "build-front")
        build_front
        ;;
    "start-front")
        start_front
        ;;
    "start")
        start
        ;;
    "stop")
        stop
        ;;
    "pre-commit")
        pre_commit
        ;;
    "clean")
        clean
        ;;
    "all")
        all
        ;;
    *)
        echo "Usage: $0 {setup-front|build-front|start-front|start|stop|pre-commit|clean|all}"
        exit 1
        ;;
esac
