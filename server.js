var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World');
})

app.use('/', express.static(__dirname + "/client"));

app.get('/*', function (req, res) {
  res.send('no such thing dude');
})

//c9.io environment specific PORT
app.listen(process.env.PORT, function() {console.log("listening")});
