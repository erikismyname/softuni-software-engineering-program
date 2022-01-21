exam_time_h = int(input())
exam_time_min = int(input())
arrival_time_h = int(input())
arrival_time_min = int(input())
status = ''
additional_info = ''

exam_time_in_min = exam_time_h * 60 + exam_time_min
arrival_time_in_min = arrival_time_h * 60 + arrival_time_min
time_difference_min = exam_time_in_min - arrival_time_in_min
h = abs(time_difference_min) // 60
m = abs(time_difference_min) % 60

if time_difference_min > 30:
    status = 'Early'
    if time_difference_min < 60:
        additional_info = f'{time_difference_min} minutes before the start'
    else:
        additional_info = f'{h}:0{m}' if m < 10 else f'{h}:{m}'
        additional_info += ' hours before the start'
elif time_difference_min < 0:
    status = 'Late'
    time_difference_min = abs(time_difference_min)
    if time_difference_min < 60:
        additional_info = f'{time_difference_min} minutes after the start'
    else:
        additional_info = f'{h}:0{m}' if m < 10 else f'{h}:{m}'
        additional_info += ' hours after the start'
else:
    status = 'On time'
    if time_difference_min:
        additional_info = f'{time_difference_min} minutes before the start'

print(f'{status}\n{additional_info}')
