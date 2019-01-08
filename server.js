var express = require("express");
var app = express();
var path = require("path");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
