FROM node:12.2.0-alpine

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./public/ /app/public/
COPY ./src/ /app/src/

# Compile the stylus
RUN npm install stylus -g \
    && stylus /app/src/page/*.styl


ENV PATH /app/node_modules/.bin:$PATH

RUN npm install 


CMD ["npm", "start"]

