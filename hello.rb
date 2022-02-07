# puts "Hello"
# p "Hello"
# print "Hello"

# p "hello".class

# p 42.to_s
# p "42".to_i

student = "Brian"
p student.length
p student.size
# p student.count # count is for array

# p student.first # first is for array
p student[0]
p student[2..]
p student[2..4]
p student.slice(2,4) # slice from index 2 to index 4 included
p student.upcase
p student.downcase
p student.capitalize

students = ["Takeshi", "David", "Kanae"]
joined_students = students.join
p joined_students

# Concatenation
p student + " is amazing"
# Interpolation
p "#{student} is amazing"
