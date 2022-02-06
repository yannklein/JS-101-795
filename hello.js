console.log("Hello everyone!");

console.log(typeof('string'))
console.log(typeof(12))
console.log(typeof(42.4))
console.log(typeof(['Steven', 'Tom', 'Erika']))
console.log(typeof({ awer: 1, bwr: 2, cwer: 3 }))
console.log(typeof(true))

const firstName = 'Steven';
let age = 10;

age += 1;
console.log(age);

// firstName = 'Tom'; //YOU CANNOT RE-ASSIGN CONST
console.log(firstName);

const students = ['Steven', 'Tom', 'Erika'];

students.push("Cedrine");
console.log(students);

console.log(firstName.slice(1));
console.log(firstName.substring(1, 3)); // from index 1 to 3 excluded

const studentString = "Nico-Reona-Gary-Arisa";
const newStudents = studentString.split('-');

console.log(newStudents.join(' and '));