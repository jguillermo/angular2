'use strict';

var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();

var routePath="./routers/";

var fs=require("fs");

var path = require('path');

app.use(express.static('app'));


fs.readdirSync(routePath).forEach(function(file) {
    var route=routePath+file;
    require(route)(app,path);
});

// app.get('/', function (req, res) {
//     //res.sendFile('./app/hola.html');
//     res.sendFile('public/hola.html', { root: __dirname });
// });

app.listen(PORT);
console.log('Running on http://localhost:8084');