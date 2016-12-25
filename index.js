// Dependencies
var express = require('express');
var mysql = require('mysql');

// Global Variables
var app = express();
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  database : 'nodeblog',
  user     : 'root'
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  connection.query('SELECT * FROM posts;', function(err, rows, fields) {
    if (err) throw err;

    // console.log('The solution is: ', rows[0].solution);
    res.send(rows)
  });
})

app.get('/a', function (req, res) {
  res.send('Something else')
})

// Database connection script from githum/mysqljs/mysql
connection.connect(function(err) {
  if (err) {
    // Unsuccessful connection to database
    console.error('error connecting: ' + err.stack);
    return;
  }

  // Successful to database
  console.log('connected to database as id ' + connection.threadId);

  // Listen for requests
  app.listen(3000, function () {
    console.log('App NodeBlog listening on port 3000!')
  })
});
