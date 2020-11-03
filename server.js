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
// require routes from file (passing the app as argument into function)
require("./controller/apiRoutes")(app)
require("./controller/htmlRoutes")(app)

// 
// LISTENER
// ===========================================================
app.listen(PORT, function() {
  console.log("app listening at http://localhost: " + PORT);
});
