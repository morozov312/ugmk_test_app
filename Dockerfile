
FROM node:18-alpine

WORKDIR /react-vite-app

EXPOSE 3000

COPY package.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "run", "start"]