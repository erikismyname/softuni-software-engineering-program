x = float(input())
y = float(input())
h = float(input())

door_width = 1.2
door_height = 2
door_area = door_width * door_height
total_front_and_back_area = 2 * (x ** 2) - door_area

window_side = 1.5
window_area = window_side ** 2
total_left_and_right_area = 2 * (x * y) - 2 * window_area

needed_green_paint = (total_front_and_back_area + total_left_and_right_area) / 3.4

total_front_and_back_roof_area = (x * h / 2) * 2
total_left_and_right_roof_area = x * y * 2

needed_red_paint = (total_front_and_back_roof_area + total_left_and_right_roof_area) / 4.3

print(f'{needed_green_paint:.2f}\n{needed_red_paint:.2f}')
