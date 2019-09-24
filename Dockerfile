FROM node:alpine

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
EXPOSE 3001
CMD [ "npm", "run", "prod" ]
