<h1 align='center'>Open Source Front-end For Somnolence</h1>

[![Build Status](https://img.shields.io/circleci/project/github/levsthings/somnolence.svg?style=flat-square)](https://circleci.com/gh/levsthings/somnolence.svg?style=svg)

### Usage

**Run Development Mode**

`yarn install`
`yarn build/dev` for development mode with `webpack-dev-server`

Dev server will be available on: `localhost:3000`

**Run Production Mode**

Run docker-compose and get your image built and served.

```bash
docker-compose up
```

Run with build flag if any of the source code is changed to update the image.

```bash
docker-compose --build 
```

Production front-end server will be available on: `localhost:3000`

**Manual Deployment**

```bash
docker build .

eb deploy
```
