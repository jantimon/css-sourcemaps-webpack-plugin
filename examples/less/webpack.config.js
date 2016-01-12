var CssSourcemapPlugin = require('../..');
module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  plugins: [
    new CssSourcemapPlugin()
  ]
};
