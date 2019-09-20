// Dependencies
// =============================================================
//Framework that is a wrapper for the node http package and it comes with a number of methods that help make building a web server much simpler. 
var express = require("express");
//path is native to node library. Allows usage  of file paths to get current relative directory
var path = require("path");

// Sets up the Express App
// =============================================================
//creating instance of express
var app = express();
//sets the lane "listener" we are going to use to access client side http site
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
//MIDDLEWARE FUNCTIONS
//Sets up the Express app to handle the data parsing
//Responsible for parsing incoming data in the form of a POST request
//When parsed, the incoming data is fed to the Req.Body object 
//If these are not included, in POST route there will not be a req.body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// all routes - that's where we are getting our data from 
require("./app/routing/apiRoutes.js")(app);

// html routes
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
