// require data 
let notesData = require("../model/notesData");


// export api routes
module.exports = function (app) {

    // home route "/notes" all the notes data
    app.get("/api/notes", async (req, res) => {
        try {
            await res.json(notesData)
        }

        // catch error
        catch (e) { throw e };
    });

    // post route
    app.post("/api/notes", async (req, res) => {

        let newNote = req.body;
        let id = (notesData.length).toString();
        newNote.id = id;

        try {
            await notesData.push(newNote);
        }

        // catch error
        catch (e) { throw e };

        res.json(newNote);

    });

    // delete
    app.delete("/api/notes/:id", (req, res) => {
        let noteId = req.params.id
        if(noteId){
            notesData = notesData.filter(curr => { return curr.id != noteId })
        } 
        else {
            throw err
        };

        console.log("clicked")
        console.log(notesData)
        res.json(notesData)

    });

}