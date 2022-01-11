from math import pi

figure_type = input()

area = 0

if figure_type == 'square':
    side = float(input())
    area = side ** 2
elif figure_type == 'rectangle':
    side_a = float(input())
    side_b = float(input())
    area = side_a * side_b
elif figure_type == 'circle':
    radius = float(input())
    area = pi * (radius ** 2)
else:
    side = float(input())
    height = float(input())
    area = side * height / 2

print(f'{area:.3f}')
