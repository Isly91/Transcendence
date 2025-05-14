FROM node:20-alpine

WORKDIR /transcendence

RUN apk add --no-cache sqlite sqlite-dev

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
