// Dependencies
const express = require('express');
const mysql = require('mysql');

// Global Variables
const app = express();
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  database : 'nodeblog',
  user     : 'root'
});


app.get('/', function (req, res) {
  res.send('Welcome to the NodeBlog app!')
})

// Display all the posts in the app.
app.get('/allposts', function (req, res) {
  connection.query('SELECT * FROM posts;', function(err, rows, fields) {
    if (err) throw err;

    // console.log('The solution is: ', rows[0].solution);
    res.send(rows)
  });
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
