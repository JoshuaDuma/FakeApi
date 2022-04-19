FROM node:16
# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./api/ .

RUN npm install

EXPOSE 2084

CMD [ "node", "server.js" ]