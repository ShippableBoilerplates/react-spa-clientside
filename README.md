<h1 align='center'>Ship A Client-Side React SPA</h1>

[![Build Status](https://img.shields.io/circleci/project/github/levsthings/somnolence.svg?style=flat-square)](https://circleci.com/gh/levsthings/somnolence.svg?style=svg)

### Usage

**Development Mode**

Install dependencies:

```bash
yarn install
```

Run in development mode via `webpack-dev-server`

```bash
yarn dev
```

`webpack-dev-server` will be serving on: `localhost:3000`

**Run Production Mode**

Get your image built and run the production container:

```bash
docker-compose up
```

Run with build flag if any of the source code is changed to update the image:

```bash
docker-compose up --build 
```

Front-end server will be serving on: `localhost:3000`

**Manual Deployment**

```bash
docker build .

eb deploy
```

TODOS:

- [x] Add Boilerplate With Counter
- [x] Fetch a random Chuck Norris joke with Saga http://api.icndb.com/jokes/random

- [ ] Add Caddy/NGINX for proxy server
- [x] Add Morgan logging

- [ ] Publish Docker Image
- [ ] Test Swarms

- [ ] Add documentation
