// require data 
const notesData = require("../model/db.json");

// export api routes
module.exports = function (app){

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

        console.log(notesData);

        fs.writeFileSync("./model/db.json", JSON.stringify(newNote, null,2));
        res.json(notesData);
        

    });

    // delete
    app.delete("/api/notes/:id", (req, res) => {
        let noteId = req.params.id
        notesData.length = 0
    });
   
}