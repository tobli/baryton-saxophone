'use strict';

var Download = require('download');

new Download()
    .get('http://selenium-release.storage.googleapis.com/2.45/selenium-server-standalone-2.45.0.jar')
    .dest('vendor')
    .run();
