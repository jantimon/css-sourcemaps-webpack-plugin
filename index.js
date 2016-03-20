'use strict';
var loaderRegexp = /[\\\/](css|less|sass|stylus)\-loader[\\\/]index.js/;
var loaderUtils = require('loader-utils');

function CssSourcemapPlugin (options) {
  this.options = options || {
    disabled: false
  };
}

CssSourcemapPlugin.prototype.apply = function (compiler) {
  // Skip if this module is disabled
  if (this.options.disabled) {
    return;
  }

  // Warn the user if the configuration prevents valid source maps
  var validExtractDevTools = ['source-map', 'inline-source-map'];
  compiler.plugin('compilation', function (compilation) {
    if (compilation.compiler.name === 'extract-text-webpack-plugin') {
      if (validExtractDevTools.indexOf(compiler.options.devtool) === -1) {
        compilation.errors.push(
          'CssSourcemapPlugin - Creating the CSS source map failed because ' +
          'the specified devtool is not supported. \n' +
          'Please set devtool to one of ' + JSON.stringify(validExtractDevTools) + ' or disable the extract-text-webpack-plugin\n' +
          'See also https://webpack.github.io/docs/configuration.html#devtool'
        );
      }
    }
  });

  // Set all loaders to sourceMap: true
  compiler.plugin('normal-module-factory', function (nmf) {
    nmf.plugin('before-resolve', function (result, callback) {
      // Call processRequest for every module request that matches the regexp
      if (loaderRegexp.test(result.request)) {
        result.request = result.request
          .split('!')
          .map(function (request) {
            var loader = request.match(loaderRegexp);
            return loader ? this.processRequest(request, loader[1]) : request;
          }.bind(this))
          .join('!');
      }
      return callback(null, result);
    }.bind(this));
  }.bind(this));
};

CssSourcemapPlugin.prototype.processRequest = function (request, loader) {
  var requestParts = request.split('?');
  var query = loaderUtils.parseQuery(requestParts[1] ? '?' + requestParts[1] : '');

  switch (loader) {
    case 'css':
    case 'less':
    case 'sass':
    case 'stylus':
      query.sourceMap = true;
      break;
  }
  return requestParts[0] + '?' + JSON.stringify(query);
};

module.exports = CssSourcemapPlugin;
