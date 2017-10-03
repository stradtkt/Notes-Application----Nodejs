//fs.appendFile() will need to append the data
const os = require('os');
const fs = require('fs');
const yargs = require('yargs'); //yargs parses the data that is passed
const notes = require('./notes.js');
const _ = require('lodash');

const titleOptions = {
    title: {
        describe: 'Title of note',
        demand: true,
        //you would use t as the command
        alias: 't'
    },
};
const bodyOptions = {
    body: {
        describe: 'Body of the note',
        demand: true,
        //sets the alias to b for the command
        alias: 'b'
    }
};
const argv = yargs
                        //description for the command
                        .command('add', 'Add a new note', {
                            title: titleOptions,
                            body: bodyOptions
                        })
                        .command('list', 'List all notes')
                        .command('read', 'Read a note', {
                            title: titleOptions
                        })
                        .command('remove', 'Remove a note', {
                            title: titleOptions
                        })
                        .help()
                        //displays useful information when the help command is used
                        .argv;
//add functionality so when one of those commands get typed in they actually execute something




var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);
if(command === 'add') {
    //addNote function is in notes.js this will add the note with a title and body
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created!');
        //log the notes messages if the note was found
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }

    //use argv to be able to use yargs with the title and body of the note
} else if(command === 'list') {
    var allNotes = notes.getAll();
    //print the list of notes
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    })
} else if(command === 'read') {
    //fetch the not to read if the note was found
    //can be a object or undefined
    var note = notes.getNote(argv.title);
    if(note) {
        //if the note is
        console.log('Note Found');
        //log the notes message if the note was found
        notes.logNote(note);
    } else {
        //prints an error if note is not found
        console.log('Note not found');
    }
} else if(command === 'remove') {
    //removing the note from notes
    var noteRemoved = notes.removeNote(argv.title);
    // message will appear saying if the note was removed or not
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}
console.log(process.argv);
