var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CssSourcemapPlugin = require('../..');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new CssSourcemapPlugin()
  ]
};
