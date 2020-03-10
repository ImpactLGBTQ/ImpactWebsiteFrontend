FROM node:12.2.0-alpine
MAINTAINER Ash England Elbro <ashenglandelbro@protonmail.com>

COPY ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir /app && cp -a /tmp/node_modules /app


ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
COPY . /app

# Compile the stylus
RUN npm install stylus -g \
    && stylus /app/src/page/*.styl \
    && npm install serve -g


RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]

