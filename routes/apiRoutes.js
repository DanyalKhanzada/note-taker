
var router = require("express").Router(); // aquires express
var notes = require("../db/notes.js"); // aquires the notes file

router.get("/notes", function(req, res) { //requests for notes.js" and "gets" the Notes class in the file 
    notes.getNotes()
    .then(notes => res.json(notes)) // gets the notes and putting it in a json format 
    .catch(err => res.status(500).json(err)); // if there are no notes, then it catches an error.
});

router.post("/notes", (req, res) => { // "posts" the notes within the js file
    notes.addNotes(req.body) // requesting the server to take the response
    .then((note) => res.json(note)) // posting the notes to the json file 
    .catch(err => res.status(500).json(err)); // catches error when something goes wrong
});

router.delete("/notes/:id", function (req, res) { //goes to specific ID
    notes.deleteNotes(req.params.id) // requests to delete a note object by chosen ID
    .then(() => res.json({ok: true})) // sends a response to ok a deletion of a specific note with the same ID 
    .catch(err => res.status(500).json(err)); //catches error when something goes wrong 
});

module.exports = router;