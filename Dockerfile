FROM node
RUN mkdir /build
COPY package.json /build
WORKDIR /build
RUN npm install
COPY app.js /build
COPY config /build/config
COPY client /build/client
COPY build /build/build
CMD node app.js
