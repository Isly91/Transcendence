FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g typescript

RUN npx tsc --init

RUN npm install -g next

# To fix
RUN npm install -g tailwindcss 

RUN npm install gsap

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

#Typescript-GSAP-Next.js e Tailwind CSS 