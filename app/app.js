'use strict';

require('babel-register');

const app = require('./index');
app.listen(8881);
console.log('listening .... 8881');
module.exports = app;