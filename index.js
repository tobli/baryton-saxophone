'use strict';

var path = require('path');

module.exports.jarPath = function() {
  return path.resolve(__dirname, 'vendor', 'selenium-server-standalone.jar');
};
