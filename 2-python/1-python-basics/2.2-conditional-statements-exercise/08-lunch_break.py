from math import ceil

show_name = input()
episode_duration = int(input())
break_duration = int(input())

lunch_time = break_duration / 8
rest_time = break_duration / 4

total_time = episode_duration + lunch_time + rest_time
time_difference = break_duration - total_time

if time_difference >= 0:
    print(f'You have enough time to watch {show_name} and left with {ceil(time_difference)} minutes free time.')
else:
    print(f'You don\'t have enough time to watch {show_name}, you need {ceil(abs(time_difference))} more minutes.')
