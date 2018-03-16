FROM node:latest

WORKDIR /app

ADD . /app

RUN npm install

RUN npm run test