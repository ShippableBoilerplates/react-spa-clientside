FROM node:8.6.0
LABEL maintainer=levsthings

STOPSIGNAL SIGTERM

WORKDIR /app
COPY . /app

ENV PORT=3000
# EXPOSE 3000

RUN chown node: $(pwd) -R
USER node

RUN yarn install

ENV NODE_ENV=production
ENTRYPOINT yarn start