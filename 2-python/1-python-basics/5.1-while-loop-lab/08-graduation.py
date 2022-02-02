student_name = input()
yearly_grade = float(input())
yearly_grades_sum = 0
grade_counter = 1
failure_counter = 0

while True:
    if yearly_grade >= 4:
        yearly_grades_sum += yearly_grade
        grade_counter += 1
        if grade_counter > 12:
            break
    else:
        failure_counter += 1
        if failure_counter > 1:
            break
    yearly_grade = float(input())

output = ''

if failure_counter > 1:
    output = f'{student_name} has been excluded at {grade_counter} grade'
else:
    avg_grade = yearly_grades_sum / 12
    output = f'{student_name} graduated. Average grade: {avg_grade:.2f}'

print(output)
