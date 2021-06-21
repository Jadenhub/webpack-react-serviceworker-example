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
3.
Desktop

<img src="https://user-images.githubusercontent.com/36879858/122718460-8e105480-d29f-11eb-8790-cebacbb542ce.png" width="50%">

Mobile

<img src="https://user-images.githubusercontent.com/36879858/122718515-9f596100-d29f-11eb-9a57-28c457b5124b.png" width="20%">


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
