FROM node:7
MAINTAINER Jose guillermo <jguillermo@outlook.com>
ENV VERSION 1.0


ENV SRC_DIR=/app
ENV SRC_VENDOR=/vendor
ENV DOCKER_USER="dockerdev"

#RUN apt-get install -y git \
#    && gpg --keyserver pool.sks-keyservers.net --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4 \
#    && curl -o /usr/local/bin/gosu -SL "https://github.com/tianon/gosu/releases/download/1.2/gosu-amd64" \
#    && curl -o /usr/local/bin/gosu.asc -SL "https://github.com/tianon/gosu/releases/download/1.2/gosu-amd64.asc" \
#    && gpg --verify /usr/local/bin/gosu.asc \
#    && rm /usr/local/bin/gosu.asc \
#    && rm -r /root/.gnupg/ \
#    && chmod +x /usr/local/bin/gosu



#RUN npm install -g gulp@3.9.1 && \
#    npm install -g bower@1.7.2 && \
#    mkdir -p $SRC_VENDOR
#RUN ln -s /usr/local/bin/node /usr/local/bin/nodejs


WORKDIR $SRC_DIR

# Entrypoint
#COPY ./entrypoint.sh /root/entrypoint.sh
#RUN chmod +x /root/entrypoint.sh

#ENTRYPOINT ["/root/entrypoint.sh"]