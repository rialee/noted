// require data 
let notesData = require("../model/notesData");


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

        console.log(newNote);
    
    });

    // delete
    app.delete("/api/notes/:id", (req, res) => {
        
        let noteId = req.params.id
        
        notesData = notesData.filter(curr => {return curr.id != noteId})
    
        console.log("clicked")
        console.log(notesData)
        res.json(notesData)

    });
   
}