// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends, survey, etc.
// ===============================================================================

var friendData = require("../data/friendData");
var surveyData = require("../data/surveyData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friend", function(req, res) {
    res.json(friendData);
  });

  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friend", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    if (tableData.length < 5) {
      friendData.push(req.body);
      res.json(true);
    }
    else {
      surveyData.push(req.body);
      res.json(false);
    }
  });
  
  // Clear table when submitted.

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];
    surveyData = [];

    console.log(friendData);
  });
};
