// require dependencies
const fs = require ("fs")
const path = require ("path")

// export html routes
module.exports = function (app){

        // home route "/"
        app.get("/", (req, res) => {

            res.sendFile(path.join(__dirname, "../view/index.html"));
        });

        // note route "/notes"
        app.get("/notes", (req, res) => {
            
            res.sendFile(path.join(__dirname, "../view/notes.html"));
        });

        // default route
        app.get("*", function(req, res) {
            res.sendFile(path.join(__dirname, "../view/index.html"));
        });

}
