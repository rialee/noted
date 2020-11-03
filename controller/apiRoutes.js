// export api routes
module.exports = function (app){

    app.get("/", (req, res) => { 
        res.end("route test")
    });

}