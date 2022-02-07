# ARRAY CRUD
students = ['Steven', 'Tom', 'Erika']

# Create
students << "Kim" # only ruby
students.push("Amane")
p students
# Read
p students[3]
# Update
students[4] = "Happy belated birthday Amane!"
p students
# Delete
students.delete("Steven")
p students
students.delete_at(1)
p students

students.each do |student|
  puts "#{student} is great!"
end