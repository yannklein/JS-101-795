console.log("Hello");
console.log(typeof("hello"));

console.log((42).toString());
console.log(parseInt("42", 10));

const student = "Brian";
// student = "Arthur"; CANNOT RE-ASSIGN
console.log(student);

let age = 24;
age += 1;
console.log(age);

console.log(student.length);
console.log(student[0]);

console.log(student.slice(2,4)); // slice from index 2 to index 4 excluded
console.log(student.substring(2,4)); // slice from index 2 to index 4 excluded
console.log(student.substring(2)); // slice from index to onwards

console.log(student.toLowerCase());
console.log(student.toUpperCase());

const students = ["Takeshi", "David", "Kanae"]
const joinedStudentsWithComma = students.join() // get a joined string with comma between each value
const joinedStudents = students.join("")
console.log(joinedStudentsWithComma);
console.log(joinedStudents);

console.log(joinedStudentsWithComma.split(","))
console.log(joinedStudentsWithComma.split(""))

// Concatenation
console.log(student + " is amazing");
// Interpolation
console.log(`${student} is amazing`);