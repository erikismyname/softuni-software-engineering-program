first_time_seconds = int(input())
second_time_seconds = int(input())
third_time_seconds = int(input())

total_time_seconds = first_time_seconds + second_time_seconds + third_time_seconds
minutes = total_time_seconds // 60
seconds = total_time_seconds % 60

if seconds < 10:
    print(f'{minutes}:0{seconds}')
else:
    print(f'{minutes}:{seconds}')
