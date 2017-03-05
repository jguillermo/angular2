FROM node:7
MAINTAINER Jose guillermo <jguillermo@outlook.com>
ENV VERSION 1.0


ENV SRC_DIR=/usr/src/app

RUN npm install -g gulp@3.9.1 && \
    npm install -g bower@1.8.0 && \
    npm install -g typescript@2.2.1 && \
    npm install -g @angular/cli && \
    npm install -g cordova@6.5.0 && \
    npm install -g ionic@2.2.1 && \
    mkdir -p $SRC_DIR

COPY ./bowerrc /root/.bowerrc

WORKDIR $SRC_DIR