FROM node:alpine
RUN mkdir -p /project
COPY package.json /project
WORKDIR /project
RUN npm install
COPY index.js /project
ENTRYPOINT node index.js
