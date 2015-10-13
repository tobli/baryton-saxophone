'use strict';

var Download = require('download'),
    downloadStatus = require('download-status');

new Download()
    .get('http://selenium-release.storage.googleapis.com/2.48/selenium-server-standalone-2.48.2.jar')
    .dest('vendor')
    .rename('selenium-server-standalone.jar')
    .use(downloadStatus())
    .run(function(err) {
      if (err) {
        throw err;
      }
    });
