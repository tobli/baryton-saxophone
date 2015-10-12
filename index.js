'use strict';

var path = require('path'),
  version = require('./package').version;

module.exports.version = version;

module.exports.jarPath = function() {
  return path.resolve(__dirname, 'vendor', 'selenium-server-standalone.jar');
};
