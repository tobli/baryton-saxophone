'use strict';

var Download = require('download'),
    downloadStatus = require('download-status');

new Download()
    .get('http://selenium-release.storage.googleapis.com/2.46/selenium-server-standalone-2.46.0.jar')
    .dest('vendor')
    .use(downloadStatus())
    .run(function(err) {
      if (err) {
        throw err;
      }
    });
