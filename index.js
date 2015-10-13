'use strict';

var path = require('path'),
  pkg = require('./package');

module.exports.seleniumServer = {
  version: pkg.version,
  jarPath: function() {
    return path.resolve(__dirname, 'vendor', 'selenium-server-standalone.jar');
  }
};
