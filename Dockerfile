# image Base
FROM node:18-alpine AS builder

# install packages
RUN apk update && \
    apk upgrade && \
    apk add bash && \
    rm -rf /var/cache/apk/*

# set working directory
WORKDIR /app

# install pnpm
RUN npm install -g pnpm

# copy files
COPY . .

# install deps
RUN pnpm install

# build application
RUN pnpm build

# serve app via nginx
FROM nginx:alpine

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /app/dist

RUN rm -rf *

COPY --from=builder /app/dist .

STOPSIGNAL SIGTERM

ENTRYPOINT ["nginx", "-g", "daemon off;"]
