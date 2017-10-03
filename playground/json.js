// var obj = {
//     name: 'Kevin'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
//
// var personString = '{"name": "Kevin", "age": 28}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
//
// //the top is a string the second is an object

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};
//write the notes to the json file
var originalNoteString = JSON.stringify(originalNote)
//this is the order it needs to be in above needs to run before below so you will not see an error
fs.writeFileSync('notes.json', originalNoteString);
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
