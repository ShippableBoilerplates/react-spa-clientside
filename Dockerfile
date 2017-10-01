FROM node:8.6.0
LABEL maintainer=levsthings

STOPSIGNAL SIGTERM

WORKDIR /somnolence
COPY . /somnolence

ENV PORT=3000
EXPOSE 3000

RUN chown node: $(pwd) -R
USER node

RUN yarn install

ENV NODE_ENV=production
ENTRYPOINT yarn start