'use strict';

require('babel-register')({
  "presets": [
    ["env", {
      "targets": {
        "node": true
      }
    }]
  ]
});

const app = require('./index');
app.listen(process.env.npm_package_config_port);
console.log('listening .... ' + process.env.npm_package_config_port);
module.exports = app;
