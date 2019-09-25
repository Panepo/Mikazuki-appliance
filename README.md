# [Mikazuki](https://github.com/Panepo/Mikazuki-appliance)

[![Build Status][travis-image]][travis-url] [![Style Status][prettier-image]][prettier-url] ![docker pulls][docker-pull] ![docker stars][docker-star]

[travis-image]: https://travis-ci.org/Panepo/Mikazuki-appliance.svg
[travis-url]: https://travis-ci.org/Panepo/Mikazuki-appliance.svg?branch=master
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
[docker-pull]: https://img.shields.io/docker/pulls/panepo/Mikazuki-appliance.svg
[docker-star]: https://img.shields.io/docker/stars/panepo/Mikazuki-appliance.svg

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
* node `^10.16.2`
* yarn `^1.16.0`

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
|`start`            |Serves your app at `localhost:3000`|
|`prettier`         |Prettier code in ./cleint and ./server|

## Author

[Panepo](https://github.com/Panepo)
