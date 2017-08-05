//Dependencies and links

var friendData = require("../data/friendData");
var surveyData = require("../data/surveyData");
var bodyParser = require('body-parser');
var path = require('path');

// Routes

module.exports = function(app) {

  // API GET Requests

  app.get("/api/friend", function(req, res) {
    res.json(friendData);
  });

  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });

  // API POST Requests

  app.post("/api/friends", function(request, result) {
      var you = request.body;
      var newFriend = -1;
      var newFriendScore = 100;
      var currentFriendScore = 0;
      //Loops through friends score, checking for closest match
      for (i = 0; i < friendsData.length; i++) {

        for (j = 0; j < you.scores.length; j++) {

          currentFriendScore = currentFriendScore + Math.abs(friendsData[i].scores[j] - you.scores[j]);
        }
        if (currentFriendScore <= newFriendScore) {
          newFriend = i;
          newFriendScore = currentFriendScore;
        }
        currentFriendScore = 0;
      }
    }
    friendsData.push(you); newFriendDetails = friendsData[newFriend]; result.json(newFriendDetails);

  );


};
