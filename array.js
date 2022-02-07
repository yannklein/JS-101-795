// ARRAY CRUD
const students = ['David', 'Risako', 'Andrei'];

// Create
students.push("Kim");
students.push("Amane");
console.log(students);
// Read
console.log(students[3]);
// Update
students[4] = "Happy belated birthday Amane!";
console.log(students);
// Delete
students.splice(0,2);
console.log(students);

// JS arrow function: () => {}
students.forEach((student) => {
  console.log(`${student} is great!`);
});