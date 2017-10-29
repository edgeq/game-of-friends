// Your server.js file should require the basic npm packages we’ve used in class: express, body-parser and path.
var path = require("path");
var express = require('express')
var bodyParser = require("body-parser");

//Express App Setup
var app = express();
var PORT = process.env.PORT || 3000;
var htmlRoutes = require("./app/routing/htmlRoutes.js")
var apiRoutes = require("./app/routing/apiRoutes.js")

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routing
htmlRoutes(app);
apiRoutes(app);


//Server Start
app.listen(PORT, function(){
  console.log("server running on 3000")
});
