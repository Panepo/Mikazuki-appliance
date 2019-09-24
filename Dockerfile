FROM node:10

LABEL maintainer="Panepo <panepo@github.io>"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./server/package.json /usr/src/app/

# RUN npm install nodejieba
# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./server/. /usr/src/app

# Environment variables
ENV NODE_ENV production

# Start server

# Expose is NOT supported by Heroku
EXPOSE 3001

CMD NODE_ENV=production node src/index.js

# CMD for Heroku deployment
# CMD NODE_ENV=production PORT=$PORT nodemon src/index.js
