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
var PORT = 4400;

// Sets up the Express app to handle data parsing
//MIDDLEWARE FUNCTIONS
//Sets up the Express app to handle the data parsing
//Responsible for parsing incoming data in the form of a POST request
//When parsed, the incoming data is fed to the Req.Body object 
//If these are not included, in POST route there will not be a req.body.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


var bestFriend = []
app.get("/", function(req, res) {
    //use the response object to invoke the sendFile method
    //path.
      res.sendFile(path.join(__dirname, "/app/public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });
    
    // Displays all friends
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        // Using a RegEx Pattern to remove spaces from newReservation
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        //newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
      
        // console.log(newReservation);
        

        friendsArr.push(newFriend);


        console.log(bestFriend)
        return res.json(bestFriend);
    });
    


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
