console.log('Starting notes.js');
const fs = require('fs');//you do not need to install


var fetchNotes = () => {
    //when you call fetchNotes you will run the try statement
    try {
        //notes is already an empty array so this is fine
        //makes sure that the program doesn't run incorrectly
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        //only runs if try fails
        return [];
    }
};

//saves so you can use it as a reusable function
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
//add note
var addNote = (title, body) => {
    //getting the function to retrieve the notes
    var notes = fetchNotes();
    var note = {
        title,//takes in the title
        body//takes in the body
    };

    var duplicateNotes = notes.filter((note) => {
        note.title === title
    });
    if(duplicateNotes.length === 0) {
        //push the note onto the notes array
        notes.push(note);
        //writes to the file and adds notes
        saveNotes(notes);
        return note;
    }
};

//get all notes
var getAll = () => {
    return fetchNotes();
};
//get the note and then read it
var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
        //this is used this way so you can return twice and is shorter
        //if the title matches the notes title then it will bring back the notes.title if true if false error
        return filteredNotes[0];
};
//remove the note
var removeNote = (title) => {
    //var notes is holding the function to fetch the notes
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('-----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    saveNotes,
    fetchNotes,
    removeNote,
    logNote
};
