# Baryton Saxophone - Selenium Server install

This is a simple package that downloads [Selenium Server](http://docs.seleniumhq.org/download/) and 
provides a node api for accessing the path to the jar file. There are other packages like this, but I wanted to make
sure I had an updated package to include in [Browsertime](http://www.browsertime.net). 

Why the funny name you ask? Well, there are [countless](https://www.npmjs.com/search?q=selenium) Selenium modules in npm.
Keywords and the description for the module allows you to find it anyway, so might as well choose a unique name.

How to use?
```node
var server = require('baryton-saxophone').seleniumServer;

var p = server.jarPath();
// launch server from path
```