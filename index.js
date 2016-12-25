// Dependencies
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Global Variables
const app = express();
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  database : 'nodeblog',
  user     : 'root'
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('Welcome to the NodeBlog app!')
})

// Post a new post to the posts table.
app.post('/newpost',function(req,res){
  var post = {title: req.body.title, body: req.body.body};

  connection.query('INSERT INTO posts SET ?', post, function(err, result) {
    res.send('Post complete');
  });

});

// Display all the posts in the app.
app.get('/allposts', function (req, res) {
  connection.query('SELECT * FROM posts;', function(err, rows, fields) {
    if (err) throw err;

    // console.log('The solution is: ', rows[0].solution);
    res.send(rows)
  });
});

// Database connection script from github/mysqljs/mysql
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
