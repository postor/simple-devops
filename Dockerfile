FROM node:latest

WORKDIR /app

ADD . /app

RUN npm install

RUN npm run test

EXPOSE 3000

CMD ["node", "app.js"]