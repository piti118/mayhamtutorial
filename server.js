var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello-json', function (req, res) {
  res.json({
    students: ['may', 'ham'],
    sea: 'ice'
  });
});

app.get('/hello/:name',  (req, res) => {
  var name = req.params.name;
  console.log("I got " + name);
  res.json({name: name});
})

app.get('/now', (req, res) => {
  var now = Date.now()
  console.log(now)
  res.json({now: now})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
