const util = require('util');
const fs = require('fs');
const uuidv1 = require("uuid"); 
const { constants } = require('os');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes { // creates a new class called not
    read() {
        return readFileAsync("db/db.json", "utf8"); // shows the notes from the database json file (db.json)
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note)); // makes a 
    }

    getNotes() {
        return this.read().then(notes => {
          let parsedNotes;
          
          try {
              parsedNotes = [].concat(JSON.parse(notes)); // checks to see if any note objects are within the JSON file
          } 

          catch(err) {
              parsedNotes = []; // if there are no notes on file, it catches the error and returns a blank array
          }

          return parsedNotes; // returns an array of parsed notes 

        })
    }

    addNotes(note) { // function to add a new note
        const {title, text} = note; // creates an object "note".

        const newNote = {title, text, id: uuidv1}; //whenever a user is trying to make a new note, uuid will make a random id for it.

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
        
    }

    deleteNotes(id) { //deletes by chosen id 
        return this.getNotes() // returns the available notes 
            .then(notes => notes.filter(note => note.id !== id))
            .then(updatedNotes => this.write(updatedNotes));

    }



}
    
module.exports = new Notes(); // creates a new object with notes along with its functions (read, write, and delete) within its class.