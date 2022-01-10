FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000
ENV API_KEY=test
ENV BASE_URL=https://content.guardianapis.com
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]