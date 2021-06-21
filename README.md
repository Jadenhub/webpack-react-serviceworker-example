## webpack-react-serviceworker-example

## Features

* React
* Service Worker
* Jest
* Server-Side Rendering 
* styled-component
* Webpack 5
* Docker
* RWD/AWD

## Overview

It's a ServiceWorker example. If you refresh the page, the web application still works, even through no internet connection.

## Environment Variable
This project use dotenv, so make sure you have this environment variables ready in .evn
```yaml
API_HOST=https://api.coingecko.com
SERVER_PORT=3000
SERVICE_HOST=http://localhost:3000
```

## Quick Start
1. 
```sh
npm install
```

2. 
```sh
npm run dev
```

## Docker

#### Prerequisites
Make sure you have already installed Docker Engine.
```sh
$ docker -v
Docker version 20.10.7, build f0df350
```

#### Run
```sh
  npm run docker:up
```

## Production
```sh
  npm run build
  npm run start
```

## Test
```sh
  npm run test
```