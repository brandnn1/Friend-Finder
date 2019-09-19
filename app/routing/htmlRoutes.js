var path = require('path');
var bodyParser = require('body-parser')

module.exports = function(app){
app.get("/", function(req, res) {
    //use the response object to invoke the sendFile method
    //path.
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};