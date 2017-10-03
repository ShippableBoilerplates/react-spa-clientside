<h1 align='center'>Ship A Client-Side React SPA</h1>

## Introduction

This is a client-side React boilerplate with the addition of a custom front-end server.

## Why & What?

Most of the time, when you're building a client-side app, you can just upload your compiled static files to GitHub, Surge, S3 and be done with it. But there are some use cases where you want to run your own front-end infrastructure to have more control on how your assets are served. In this case, you can spin up a Nodejs server with NGINX in front of it to have total control of your front-end.

This is an example boilerplate to demonstrate a way that it *could* be done. This one is designed with Docker in mind, running two seperate containers, one for the NGINX the other for the Node. The `docker-compose` file can satisfy your development and deployment (with Swarm) needs. The NGINX image is already built and published, all you need to do is to develop the Client SPA, package it with Node.js server and publish your custom image.

## The Stack

- Docker for local testing and production. (Compose & Swarm)
- NGINX as the reverse proxy.
- Node/Express as the front-end server.
- React/Redux/Redux-Saga for UI.
- Glamor as a css-in-js solution.
- Pug for generating HTML.

## Usage

### Development Mode:

- Prerequisites: `docker`, `node` and `yarn`

Clone the repo:

```bash
git clone https://github.com/ShippableBoilerplates/react-spa-clientside
rm -rf .git && git init
```

Client:

```bash
cd src/client
```
Install dependencies:

```bash
yarn install
```

Run in development mode via `webpack-dev-server`

```bash
yarn dev
```

**`webpack-dev-server` will be serving on: `localhost:3000`**

Server:

```bash
cd src/server
```
Install dependencies:

```bash
yarn install
```

Run server locally:

```bash
yarn start
```


### Production Mode:

#### Manually (Without NGINX):

```bash
cd src/client
yarn build/prod

cd ../server
yarn start
```

#### With Docker(Recommended):

Get your image built and run the production container:

```bash
docker-compose up
```

Run with build flag if any of the source code is changed to update the image:

```bash
docker-compose up --build 
```

This will spin up your app with `nginx` in front of `express` providing reverse proxy.

**`nginx` will serve on: `localhost:80`**

The `nginx` image is a [custom](https://github.com/ShippableBoilerplates/nginx-reverse-proxy) image. You can replace that with another image but you need to update your compose file. It's configured as a reverse proxy and forwards requests to the Node server. It does the gzipping already, and various caching methods, additional custom headers can be implemented.

### Additional Commands:

- Run `yarn lint` for linting with auto fixing:
- Run `yarn test` for testing. (Right now it just runs linting, you should add your test runner there.)
- Run `yarn cleanup` to manually remove built assets.

### Important Note:

Pay attention to the folder you're working in. To reduce the dependencies of the servers, this project now has two seperate `package.json` in `client` and `server`.