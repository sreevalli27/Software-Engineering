number_of_courses = int(input("Number of Courses:"))
cgpa = 0
for i in range(number_of_courses):
    grade = input(f"Enter grade for {i+1} subject:")
    if grade == 'A+':
        cgpa = cgpa + 9.5
    elif grade == 'A':
        cgpa = cgpa + 9
    elif grade == 'B+':
        cgpa = cgpa + 8.5
    elif grade == 'B':
        cgpa = cgpa + 8
    elif grade == 'C':
        cgpa = cgpa + 6
    elif grade == 'D':
        cgpa = cgpa + 5
    elif grade == 'E':
        cgpa = cgpa + 4
    elif grade == 'F':
        cgpa = cgpa + 0

print(f'Predicted CGPA: ({round(cgpa/number_of_courses,2)},{round(cgpa/number_of_courses,3)+0.5})')
