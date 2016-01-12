CSS Sourcemap Webpack Plugin
===================

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

You can easily disable the plugin for production configuration:

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
  plugins: [new CssSourcemapPlugin({disable: false})]
}
```
