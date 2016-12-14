"use strict";
var http = require('http');

var app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, world!</h1>');
}).listen(3001);
