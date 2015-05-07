'use strict';

var Download = require('download'),
    downloadStatus = require('download-status');

new Download()
    .get('http://selenium-release.storage.googleapis.com/2.45/selenium-server-standalone-2.45.0.jar')
    .dest('vendor')
    .use(downloadStatus())
    .run();
