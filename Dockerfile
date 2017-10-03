FROM node:8.6.0
LABEL maintainer=levsthings

STOPSIGNAL SIGTERM

## Copy app files
WORKDIR /app
COPY . /app

## Step down from root
RUN chown node: $(pwd) -R
USER node

## Switch to client directory
WORKDIR /app/src/client
## Install client dependencies and build the assets into /app/server/public
RUN yarn install && yarn build/prod

## Switch to server directory and delete the client directory
WORKDIR /app/src/server
CMD rm -rf /app/src/client

## Set node environment to production
ENV PORT=3000
ENV NODE_ENV=production

## Install server dependencies
RUN yarn install

## Run the server
ENTRYPOINT yarn start
