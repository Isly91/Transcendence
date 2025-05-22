FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g typescript

RUN npx tsc --init

RUN npm install -g next

# To fix

RUN npm cache clean --force && \
    npm install -D tailwindcss@3.3.2 postcss autoprefixer && \
    npm install

RUN npx tailwindcss init -p

RUN npm install gsap

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

#Typescript-GSAP-Next.js e Tailwind CSS 