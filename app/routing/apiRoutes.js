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

      //grabs the new friend's scores to compare with friends in friendList array
      var newFriend = req.body;
      var newFriendScores = req.body.scores;
      var scoresArray = [];
      var bestMatch = 0;
  
      //runs through all current friends in list
      for(var i=0; i<friendList.length; i++){
        var scoresDiff = 0;
        //run through scores to compare friends
        for(var j=0; j<newFriendScores.length; j++){
          scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
        }
  
        //push results into scoresArray
        scoresArray.push(scoresDiff);
      }
  
      //after all friends are compared, find best match
      for(var i=0; i<scoresArray.length; i++){
        if(scoresArray[i] <= scoresArray[bestMatch]){
          bestMatch = i;
        }
      }
  
      //return bestMatch data
      var bff = friendList[bestMatch];
      res.json(bff);
  
      //pushes new submission into the friendsList array
      friendList.push(newFriend);
  });

//////////////////////////


app.get("/friendsList", function(req, res) {
    
    connection.query("SELECT * FROM friendsList", function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
  