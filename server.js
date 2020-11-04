// DEPENDENCIES
// ===========================================================
// require express package
var express = require("express");

// set up server
var app = express();
var PORT = process.env.PORT || 3001;

// express app to handle data parsing
app.use(express.urlencoded ({extended : true}));
app.use(express.json());
app.use(express.static("view"))

// ROUTES
// ===========================================================
// require routes from file (passing the app as argument into function)
require("./controller/apiRoutes")(app)
require("./controller/htmlRoutes")(app)

// 
// LISTENER
// ===========================================================
app.listen(PORT, () => {
  console.log("app listening at http://localhost: " + PORT);
});
