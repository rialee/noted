// require data 
let notesData = require("../model/db.js");
const fs = require ("fs")


// export api routes
module.exports = function (app, fs){

     // home route "/notes" all the notes data
     app.get("/api/notes", (req, res) => {

        res.json(notesData);
    });

    // post route
    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        let id = (notesData.length).toString();
        newNote.id = id;

        notesData.push(newNote);

        res.json(newNote);
        fs.writeFileSync("./model/db.js", newNote)

        console.log(notesData);
    
    });

    // delete
    app.delete("/api/notes/:id", (req, res) => {
        let newNotesData = notesData
        let noteId = req.params.id
        
        newNotesData = newNotesData.filter(curr => {return curr.id != noteId})
    
        console.log("clicked")
        console.log(newNotesData)

    });
   
}