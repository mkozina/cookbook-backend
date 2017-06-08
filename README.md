# cookbook-backend

This project use [JSON Server](https://github.com/typicode/json-server) for full fake REST API.  
Frontend: [cookbook](https://github.com/mkozina/cookbook).

## Install

```bash
$ npm install -g json-server
```

## Development server

First run:

```bash
$ json-server --watch db.json --routes routes.json
```

Then run [frontend](https://github.com/mkozina/cookbook) dev server.

## Run server

Before you run server, you must put builded [frontend](https://github.com/mkozina/cookbook) to `./public` directory.

```bash
$ npm start
```
