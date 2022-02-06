// ARRAY CRUD
const students = ['Steven', 'Tom', 'Erika'];

// Create
students.push('Reona');
console.log(students);

// Read
console.log(students[1]);

// Update
students[1] = 'Super Tom'
console.log(students);

// Delete
students.splice(1, 1);
console.log(students);

// Arrow function
// () => {}

students.forEach((student, index) => {
  console.log(`${index + 1} - ${student} is awesome!`);
});