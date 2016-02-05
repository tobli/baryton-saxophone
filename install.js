'use strict';

var Download = require('download'),
    downloadStatus = require('download-status');

new Download()
    .get('http://selenium-release.storage.googleapis.com/2.50/selenium-server-standalone-2.50.1.jar')
    .dest('vendor')
    .rename('selenium-server-standalone.jar')
    .use(downloadStatus())
    .run(function(err) {
      if (err) {
        throw err;
      }
    });
