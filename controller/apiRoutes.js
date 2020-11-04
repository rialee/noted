// require data 
const notesData = require("../model/notes-db");

// export api routes
module.exports = function (app){

     // home route "/data" all the data
     app.get("/api/data", (req, res) => {

        res.json(notesData);
    });

    // post route
    app.post("/api/notes", (req, res) => {

        console.log(req.body)

    });

    // delete
    app.delete("/notes/:id", (req, res) => {
        
    })
   
}