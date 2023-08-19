# image Base
FROM node:18-alpine AS builder

# install packages
RUN apk update && \
    apk upgrade && \
    apk add bash && \
    apk add git && \
    rm -rf /var/cache/apk/*

# set working directory
WORKDIR /app

# install global deps
RUN npm install pnpm @nrwl/nx-linux-arm64-gnu -g

# copy files
COPY . /app

# install app deps
RUN pnpm install

# build application
RUN pnpm build

# serve app via nginx
FROM nginx:alpine

ADD docker/nginx /etc/nginx

WORKDIR /app/dist

RUN rm -rf *

COPY --from=builder /app/dist .

STOPSIGNAL SIGTERM

ENTRYPOINT ["nginx", "-g", "daemon off;"]
