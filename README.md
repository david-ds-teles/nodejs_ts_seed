# A NodeJS Seed Project

## Author

**author**: David S Teles

**email**: david.ds.teles@gmail.com

Hello, my name is David Teles and I'm a software engineer. You can find me on [Linkedin](https://www.linkedin.com/in/david-teles/). Feel free to send me a message.

## About

This NodeJS seed project helps with the initial configuration of a NodeJS project with basic configurations of typescript.

You'll find here:

* tslint
* i18n
* prettier
* nodemon (for dev only)
* pm2 (production only)
* lint-staged
* jest

## How to start

The first thing you need to do is install using the command

```
npm install
npm prepare
```

This will install the dependencies and config husk and its git hooks to execute lint, prettier and test during git commands.

#### development

```
npm run dev
curl localhost:8080
```

#### test

```
npm run test
```

#### production

```
npm run build
npm run prd
```

### environment

* **development** vars are exposed in the file: *nodemon.json*

* **production** vars are exposed in the file: *ecosystem.config.yml*
