var express = require('express');
var parseHeader = require('./parseheader')
var app = express();
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/whoami", function (req, res) {
  parseHeader(req, res);
});

app.listen(process.env.PORT);

