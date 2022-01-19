hour = int(input())
day = input()
status = ''

if day == 'Monday' \
        or day == 'Tuesday' \
        or day == 'Wednesday' \
        or day == 'Thursday' \
        or day == 'Friday' \
        or day == 'Saturday':
    if 10 <= hour <= 18:
        status = 'open'
    else:
        status = 'closed'
else:
    status = 'closed'

print(status)
