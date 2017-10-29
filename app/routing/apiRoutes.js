var path = require("path");
var friends = require('../data/friends.js')

/*
Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

*/
module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function(req, res) {
    var newFriend = req.body;
    //newFriend needs to loop through all friends
    var bff;
    var lowestDiff = 100;
    friends.forEach(function(person){
    var totalDiff = 0;
      var personScore = person.scores;
      var newPerson = newFriend.scores;
      console.log("this is person: ", person);
      console.log("this is newFriend", newFriend);
      for (var i = 0; i < person.scores.length; i++){
        totalDiff += Math.abs(parseInt(personScore[i]) - parseInt(newPerson[i]));

      }
        console.log("total diff: " + totalDiff);
        if (totalDiff < lowestDiff){
          lowestDiff = totalDiff;
          bff = person;
        }
        console.log("lowest diff: " + lowestDiff);
        console.log("best friend: ", bff)
    })
    //friends with the least difference should be the match.
    friends.push(newFriend);
    // console.log(newFriend);
    // console.log(friends);
    // res.json(friends);
    res.json(bff);
  });
}
