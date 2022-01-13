from math import floor

record_time_seconds = float(input())
distance_meters = float(input())
meter_swim_time_seconds = float(input())

added_time = floor(distance_meters / 15) * 12.5

total_time = distance_meters * meter_swim_time_seconds + added_time
time_difference = total_time - record_time_seconds

if total_time < record_time_seconds:
    print(f'Yes, he succeeded! The new world record is {total_time:.2f} seconds.')
else:
    print(f'No, he failed! He was {time_difference:.2f} seconds slower.')
