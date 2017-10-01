<h1 align='center'>Ship A Client-Side React SPA</h1>

[![Build Status](https://img.shields.io/circleci/project/github/levsthings/somnolence.svg?style=flat-square)](https://circleci.com/gh/levsthings/somnolence.svg?style=svg)

## The Stack

*to be written*

## Usage

### Development Mode:

Install dependencies:

```bash
yarn install
```

Run in development mode via `webpack-dev-server`

```bash
yarn dev
```

**`webpack-dev-server` will be serving on: `localhost:3000`**

### Production Mode:

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

The `nginx` image is a [custom](https://github.com/ShippableBoilerplates/nginx-reverse-proxy) experimental image. You can replace that with another image but you need to update your compose file.


### Deployment Flow With CircleCI:

*to be written*

### TODOS:

**Deployment:**

- [ ] Build and publish project image in CI/CD Environment
- [ ] Use Docker Swarm to Deploy

**Tests**
- [ ] Add test cases for client
- [ ] Add test cases for front-end server

**Docs**

- [ ] Add stack documentation
- [ ] Add deployment documentation

