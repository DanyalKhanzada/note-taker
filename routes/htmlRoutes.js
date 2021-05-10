// navigates the webpage //
const path = require("path"); // aquires the path library
const { dirname } = require("path");
const router = require('express').Router(); //aquires the router through express

router.get("/notes", function(req, res) { 
    res.sendFile(path.join(__dirname, "../public/notes.html")); // when we click on the link, it goes to that html link

});

router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html")) //anything that is other than notes.html, the user will be automatically sent to the main html file (index.html)

});

module.exports = router;