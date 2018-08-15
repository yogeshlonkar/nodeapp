# nodeapp
NodeJS sample app with containerization

This application is build using ReactJS for front-end and ExpressJS for back-end. Webpack is used for front-end bundling. Bootstrap, font-awesome, Sass is used for styling. Babel is used for ES6 support.

Currently for [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) Users, Books section is available. `node-cache` is used for storing added entities as temporary work around for persistance database.

## Build
For development
```shell
npm run dev
```
For webpack bundle (in /dist directory)
```shell
npm run build
```

## Docker repository
[`ylonkar/nodeapp`](https://hub.docker.com/r/ylonkar/nodeapp/)
- `latest` [Dockerfile](https://github.com/yogeshlonkar/nodeapp/blob/master/Dockerfile)

## Run
Using docker
```shell
docker run -d -p 80:80 ylonkar/nodeapp
```
From source
```shell
npm run build && npm start
```
Open http://localhost
