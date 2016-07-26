var express = require('express')
var app = express()
var moment = require('moment')


app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.sendFile(__dirname +'/public/index.html')
})

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
  var now = moment()
  res.json({now: now.toISOString()})
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
