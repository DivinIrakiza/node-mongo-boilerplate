FROM node:14

WORKDIR /usr/src/app


COPY package*.json ./

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 4008
CMD [ "yarn", "start:dev" ]