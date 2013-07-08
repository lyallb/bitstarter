// web.js
// 20130708

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var b=fs.readFileSync('./index.html');
  //response.send('Hello World2!');
  response.send(b.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
