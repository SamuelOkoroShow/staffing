# Staffing App

[![build status](https://img.shields.io/travis/tanem/react-redux-playground/master.svg?style=flat-square)](https://travis-ci.org/tanem/react-redux-playground)
[![coverage status](https://img.shields.io/coveralls/tanem/react-redux-playground.svg?style=flat-square)](https://coveralls.io/github/tanem/react-redux-playground)

 _Work in progress_

Messing about with [React](https://github.com/facebook/react) and [Redux](https://github.com/rackt/redux). There's a bunch of useful info out there, but hopefully there are a few bits and pieces others might find helpful here too.

## Features

The app is based on Redux's [counter example](https://github.com/rackt/redux/tree/master/examples/counter), and includes:

- ES2015+ syntax via [Babel](https://babeljs.io/)
- Hot reloading React classes via [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
- Live editing time travel via [Redux DevTools](https://github.com/gaearon/redux-devtools)
- Routing via [redux-simple-router](https://github.com/jlongster/redux-simple-router)
- Unit testing via [mocha](https://github.com/mochajs/mocha), [chai](https://github.com/chaijs/chai), and [sinon](https://github.com/sinonjs/sinon)
- Code coverage reporting via [isparta](https://github.com/douglasduteil/isparta)

## Start

1. Clone the repo
2. `npm install` the dependencies
3. Run `npm start`
4. Open `http://localhost:3000/` in your browser.

## Testing

Single run, specs only:

```
$ npm run test:spec
```

Run specs and watch:

```
$ npm run test:watch
```

Generate coverage reports:

```
$ npm run test:cov
```

