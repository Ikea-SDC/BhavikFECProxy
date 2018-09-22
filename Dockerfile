FROM node:10

WORKDIR /user/src/app

COPY package*.json ./ 

RUN npm install

COPY . . 

EXPOSE 5000

CMD ["npm", "start"]