const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(typeof student);
// => "object"

const key = 'firstName';

console.log(student['firstName']);
console.log(student.firstName);
// console.log(student.key); NOT WORKING
console.log(student[key]);