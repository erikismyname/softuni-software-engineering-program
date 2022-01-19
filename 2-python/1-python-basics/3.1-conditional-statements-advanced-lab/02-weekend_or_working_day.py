day = input()
day_type = ''

if day == 'Monday' or day == 'Tuesday' or day == 'Wednesday' or day == 'Thursday' or day == 'Friday':
    day_type = 'Working day'
elif day == 'Saturday' or day == 'Sunday':
    day_type = 'Weekend'
else:
    day_type = 'Error'

print(day_type)
