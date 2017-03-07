FROM jguillermo/angular2:base
MAINTAINER Jose guillermo <jguillermo@outlook.com>
ENV VERSION 1.0

ENV SRC_PUBLIC=/usr/src/app/app
ENV SRC_ROUTER=/usr/src/app/router

COPY package.json $SRC_DIR
COPY server.js $SRC_DIR

RUN mkdir -p $SRC_PUBLIC && \
    mkdir -p $SRC_ROUTER && \
    npm install