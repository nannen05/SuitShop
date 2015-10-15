var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));

app.listen(1500);
console.log('started');