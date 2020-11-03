// DEPENDENCIES
// ===========================================================
// require express package
var express = require("express");

// set up server
var app = express();
var PORT = 3000;

// express app to handle data parsing
app.use(express.urlencoded ({extended : true}));
app.use(express.json());

// ROUTES
// ===========================================================
// require routes from file
require("./controller/apiRoutes")(app)


// LISTENER
// ===========================================================
app.listen(PORT, function() {
  console.log("http://localhost: " + PORT);
});
