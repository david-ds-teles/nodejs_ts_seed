# A NodeJS Seed Project

## Author

**author**: David S Teles

**email**: david.ds.teles@gmail.com

Hello, my name is David and I'm a software engineer, you can find me on [Linkedin](https://www.linkedin.com/in/david-teles/). Feel free to send me a message.

## About

This NodeJS seed project helps us with the initial configuration of a NodeJS project
with basic configurations of typescript.

You'll find here:

* tslint
* prettier
* nodemon (for dev only)
* pm2 (production only)
* lint-staged
* jest

## How to start

#### development

```
npm install
npm run dev
curl localhost:8080
```

#### test

```
npm run test
```

#### production

```
npm install
npm run build
npm run prd
```

The build command runs the tslint automatic. If you want to overrite your files
with the prettier rules created for this seed project you can run

```
npm run prettier
```

Notice that **prettier** command **will override your files** and replace things
with the defined rules. 
Feel free to change those rules for your own code style editing *tslint.json*.

### environment

* **development** vars are exposed in the file: *nodemon.json*

* **production** vars are exposed in the file: *ecosystem.config.yml*