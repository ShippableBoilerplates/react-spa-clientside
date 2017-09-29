FROM node:8.6.0
LABEL maintainer=levsthings

STOPSIGNAL SIGTERM

WORKDIR /somnolence
COPY . /somnolence


ENV PORT=8081
EXPOSE 8081

RUN chown node: $(pwd)
USER node

RUN yarn install

ENV NODE_ENV=production
ENTRYPOINT yarn start