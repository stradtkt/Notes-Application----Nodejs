// var res = notes.addNote();
// console.log(res);
// console.log('Result: '+ notes.add(9, -2));//calls the add functions from the notes.js
// fs.appendFile('greetings.txt', 'Hello World'); this will produce and error
//you will need to use this for the treehouse project
// var user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username}, You are ${notes.age}\n`);
//template strings are better to use, so when you update the file it is easy to make changes
//this will create a file and you can save information about the user for the txt files
//this will append the file

// console.log(_.isString(true));
// //the return result will be a boolean value
// console.log(_.isString('Kevin'));
// //checks to see if the item is a string
// var nameArray = [{"name": "Kevin", "age": 28},
//                          {"name": "Patrick", "age": 31},
//                          {"name": "Mom", "age": 60},
//                          {"name": "John", "age": 58},
//                          {"name": "Buster", "age": 3},
//                          {"name": "Buddy", "age": 10}];
//
// console.log(_.orderBy(nameArray, ['name', 'age'], ['asc', 'desc']));
// //_.orderBy is used to oranganize an array
// var filteredArray = _.uniq(['Kevin', 1, 'Kevin', 1, 2, 3, 4]);
// //_.uniq takes away the duplicates in an array
// console.log(filteredArray);
// var arrayOfNames = ["Kevin", "Patrick", "Mom", "John", "Buster", "Buddy"];
// var pulled = _.pullAt(arrayOfNames, [4, 5]);
// //this will take the indexes specified from the array
// console.log('The animals of the house are: ' + pulled);
