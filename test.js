var cp = require('child_process'),
  seleniumServer = require('./').seleniumServer;

var helpText = cp.execFileSync('java', ['-jar', seleniumServer.jarPath(), '-h']).toString();

if (!helpText) {
  throw new Error('Failed to start selenium server');
}
