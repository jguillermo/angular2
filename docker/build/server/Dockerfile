FROM jguillermo/angular2:base
MAINTAINER Jose guillermo <jguillermo@outlook.com>
ENV VERSION 1.0

ENV SRC_PUBLIC=/usr/src/app/public

COPY package.json $SRC_DIR
COPY server.js $SRC_DIR

RUN mkdir -p $SRC_PUBLIC && \
    npm install