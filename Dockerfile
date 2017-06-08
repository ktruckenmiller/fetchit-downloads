FROM node:alpine
RUN mkdir -p /project
COPY package.json /project
WORKDIR /project
RUN npm install
COPY index.js /project
COPY ./public /project/public/
EXPOSE 4000
ENTRYPOINT node index.js
