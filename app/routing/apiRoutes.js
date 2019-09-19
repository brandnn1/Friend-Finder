var path = require('path');
var friendList = require('../data/friends')
var mysql = require("mysql");



var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "FloatingUnicornHorns",
  database: "friends"
});

connection.connect(function(err) {
  if (err) throw err;
});


var bestFriend = [];

module.exports = function(app){
// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friendList);
});

app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendList array
    console.log(req.body.scores);  // <-- Does not exist


    var newFriend = req.body;


    //pushes new submission into the friendsList array
    friendList.push(newFriend);
    res.json(newFriend)
});

//////////////////////////


app.get("/friendsList", function(req, res) {
    
    connection.query("SELECT * FROM friendsList", function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
  

  app.post("/friendsList", function(req, res) {
    
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log('SERVER SIDE: ', req.body)
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    // console.log(newReservation);
  
    connection.query("INSERT INTO friendsList SET ?",
    {
      name: newReservation.name,
    role: newReservation.role,
    date: newReservation.date,
    time: newReservation.time
    },
    function(err, result) {
      if (err) throw err;
      res.json(newReservation);


  })
})
};