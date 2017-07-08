FROM node:8.1.3
RUN mkdir /build
COPY package.json /build
WORKDIR /build
RUN npm install
COPY . /build
CMD node app.js
