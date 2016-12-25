var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send({nathan:'hello world', title: 'Aaron is cool'})
})

app.get('/a', function (req, res) {
  res.send('Something else')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
