'use strict';

var Download = require('download'),
    downloadStatus = require('download-status');

new Download()
    .get('https://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar')
    .dest('vendor')
    .rename('selenium-server-standalone.jar')
    .use(downloadStatus())
    .run(function(err) {
      if (err) {
        throw err;
      }
    });
