var express = require("express");
var app = express();
var mysql = require("mysql");
var path = require("path");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var PORT = process.env.PORT || 8080;


var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: ""
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
