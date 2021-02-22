# Scalable nest.js application

## Project stack

- Nest.js  
- TypeORM  
- PostgreSQL
## Installation

```bash
git clone
npm i
```
Then, change the project name in .env

## Usage

```bash
$ docker-compose up
```

## DDD cli
```bash
$ npm run g:resource SERVICE_NAME
```

## Autodeploy (Github webhooks)
1) Register webhook at Github ( repository -> settings -> webhooks -> add new webhook )
2) Change secret key at project/github-webhook/.env (key from webhook settings)
3) Run index.js at project/github-webhook/index.js
```bash
$ cd ./github-webhook
$ npm i
$ npm run start
```

## Api documentation (SWAGGER)

[localhost:7071/api](localhost:7071/api)

## Resources

- [@nestjsx/crud](https://www.npmjs.com/package/@nestjsx/crud)
- [@nestjsx/crud - Controllers](https://github.com/nestjsx/crud/wiki/Controllers)
- [NEST CLI](https://docs.nestjs.com/cli/usages)
- [generate-template-files](https://www.npmjs.com/package/generate-template-files#replacer-slots-or-ireplacerslotquestion)