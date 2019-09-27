# [Mikazuki](https://github.com/Panepo/Mikazuki-appliance)

[![Build Status][travis-image]][travis-url] [![Style Status][prettier-image]][prettier-url] [![Coverage Status][codecov-image]][codecov-url] ![docker pulls][docker-pull] ![docker stars][docker-star]

[travis-image]: https://travis-ci.org/Panepo/Mikazuki-appliance.svg
[travis-url]: https://travis-ci.org/Panepo/Mikazuki-appliance.svg?branch=master
[codecov-image]: https://codecov.io/gh/Panepo/Mikazuki-appliance/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/Panepo/Mikazuki-appliance
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
[docker-pull]: https://img.shields.io/docker/pulls/panepo/mikazuki-appliance.svg
[docker-star]: https://img.shields.io/docker/stars/panepo/mikazuki-appliance.svg

An implementation of demo application of natural language understanding.

## FAQ

### What is this?

An implementation of demo application of natural language understanding. When you enter a natural language words, the computer will try to understand what is your command.

### Appliance?

One of the usage of natural language understanding is smart appliance. In this demo page, Mikazuki will try to understand what you are talking about the appliance and control them like turn on and off, the color of light and when to control.

### Screenshot

![screenshot](https://github.com/Panepo/Mikazuki-appliance/blob/master/documents/screenshot1.png)
![screenshot](https://github.com/Panepo/Mikazuki-appliance/blob/master/documents/screenshot2.png)

## Reference

* [Natural](https://github.com/NaturalNode/natural)
* [NodeJieba](https://github.com/yanyiwu/nodejieba)
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Create React App ](https://github.com/facebook/create-react-app)
* [Material Design Lite](https://getmdl.io/)
* [Material-UI](https://material-ui.com/)

## Develop

### Development Requirements
* node `^10.16.0`
* yarn `^1.16.0`
* docker `^2.1.0`

### Getting Start

1. Clone source code
```
$ git clone https://github.com/Panepo/Mikazuki-appliance.git
```
2. Install dependencies
```
$ cd Mikazuki-appliance
$ yarn
$ cd client
$ yarn
$ cd ..
$ cd server
$ yarn
```
3. Start development server and visit [http://localhost:3000/](http://localhost:3000/)
```
$ yarn start
```
### Scripts

|`yarn <script>`       |Description|
|-------------------|-----------|
|`start`            |Serves both client and server|
|`client`           |Serves client at `localhost:3000`|
|`server`           |Serves server at `localhost:3001`|
|`lint`             |Lint code in ./cleint and ./server|
|`prettier`         |Prettier code in ./cleint and ./server|
|`test`             |Perform unit test on both client and server|

### Running on Docker locally

1. Clone per-built docker image
```
$ docker pull panepo/mikazuki-appliance
```

2. Running docker image with port connect to 8080
```
docker run -p 8080:3001 panepo/mikazuki-appliance
```

## Author

[Panepo](https://github.com/Panepo)
