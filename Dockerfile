FROM node:8.6.0
LABEL maintainer=levsthings

STOPSIGNAL SIGTERM

## Copy app files
WORKDIR /app
COPY . /app

## Port that Nodejs is going to run
ENV PORT=3000

## Step down from root and run Nodejs as a user
RUN chown node: $(pwd) -R
USER node

## Download dependencies
RUN yarn install

## Set node environment to production
ENV NODE_ENV=production

## Run start command which will compile client assets first and then run the Nodejs server
ENTRYPOINT yarn start