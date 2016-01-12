CSS Sourcemap Webpack Plugin
===================
[![npm version](https://badge.fury.io/js/css-sourcemaps-webpack-plugin.svg)](http://badge.fury.io/js/css-sourcemaps-webpack-plugin) [![Dependency Status](https://david-dm.org/jantimon/css-sourcemaps-webpack-plugin.svg)](https://david-dm.org/jantimon/css-sourcemaps-webpack-plugin) [![Build status](https://travis-ci.org/jantimon/css-sourcemaps-webpack-plugin.svg)](https://travis-ci.org/jantimon/css-sourcemaps-webpack-plugin)

This is a [webpack](http://webpack.github.io/) plugin that simplifies the usage
of CSS source maps.

Installation
------------
Install the plugin with npm:
```shell
$ npm install css-sourcemaps-webpack-plugin --save-dev
```

Usage
-----------

```javascript
var CssSourcemapPlugin = require('css-sourcemaps-webpack-plugin');
module.exports = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  plugins: [new CssSourcemapPlugin()]
}
```

Production
-----------

You can easily **disable the plugin** for your production build:

```js
var CssSourcemapPlugin = require('css-sourcemaps-webpack-plugin');
module.exports = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  plugins: [new CssSourcemapPlugin({disable: true})]
}
```
