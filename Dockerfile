FROM node:latest

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE $PORT

CMD ["yarn", "start"]