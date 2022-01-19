num = int(input())
day = ''

if 1 <= num <= 7:
    if num == 1:
        day = 'Monday'
    elif num == 2:
        day = 'Tuesday'
    elif num == 3:
        day = 'Wednesday'
    elif num == 4:
        day = 'Thursday'
    elif num == 5:
        day = 'Friday'
    elif num == 6:
        day = 'Saturday'
    else:
        day = 'Sunday'
else:
    day = 'Error'

print(day)
