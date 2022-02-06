# ARRAY CRUD
students = ['Steven', 'Tom', 'Erika']

# Create
students << 'Reona'
students.push('Reona')
p students

# Read
p students[1]

# Update
students[1] = 'Super Tom'
p students

# Delete
students.delete_at(1)
students.delete('Reona')
p students


students.each do |student|
  puts "#{student} is amazing!"
end