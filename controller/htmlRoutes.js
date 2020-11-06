// require dependencies
const fs = require("fs")
const path = require("path")

// export html routes
module.exports = function (app) {

    // home route "/"
    app.get("/", async (req, res) => {
        try {
            await res.sendFile(path.join(__dirname, "../view/index.html"));
        }
        catch (e) { throw e };
    });

    // note route "/notes"
    app.get("/notes", async (req, res) => {
        try {
            await res.sendFile(path.join(__dirname, "../view/notes.html"));
        }
        catch (e) { throw e };
    });

    // default route
    app.get("*", async (req, res) => {
        try {
            await res.sendFile(path.join(__dirname, "../view/index.html"));
        }
        catch (e) { throw e };
    });
}
