
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache \
    g++ \
    make \
    python3 \
    sqlite

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]


# do we want to add a volume for the database? 