var express = require("express");

var app = express();

app.get('', function(res){res.send('clent/index.html');})

console.log("runnin");

