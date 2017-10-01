<h1 align='center'>Ship A Client-Side React SPA</h1>

[![Build Status](https://img.shields.io/circleci/project/github/levsthings/somnolence.svg?style=flat-square)](https://circleci.com/gh/levsthings/somnolence.svg?style=svg)

## Quick Usage

### Development Mode:

**Install dependencies:**

```bash
yarn install
```

**Run in development mode via `webpack-dev-server`**

```bash
yarn dev
```

**`webpack-dev-server` will be serving on: `localhost:3000`**

### Production Mode:

**Get your image built and run the production container:**

```bash
docker-compose up
```

**Run with build flag if any of the source code is changed to update the image:**

```bash
docker-compose up --build 
```

**Front-end server will be serving on: `localhost:3000`**

### Deployment Flow With CircleCI:

*to be written*

### TODOS:

**Reverse Proxy:**
- [ ] Add NGINX for proxy server
- [ ] Publish Docker Image
- [ ] Add it to to the stack

**Deployment:**

- [ ] Build and publish project image in CI/CD Environment
- [ ] Use Docker Swarm to Deploy

**Docs**

- [ ] Add documentation
