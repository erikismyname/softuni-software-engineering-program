nums_count = int(input())
p1_count = 0
p2_count = 0
p3_count = 0
p4_count = 0
p5_count = 0

for i in range(nums_count):
    curr_num = int(input())
    if curr_num < 200:
        p1_count += 1
    elif curr_num < 400:
        p2_count += 1
    elif curr_num < 600:
        p3_count += 1
    elif curr_num < 800:
        p4_count += 1
    else:
        p5_count += 1

p1_percent = p1_count / nums_count * 100
p2_percent = p2_count / nums_count * 100
p3_percent = p3_count / nums_count * 100
p4_percent = p4_count / nums_count * 100
p5_percent = p5_count / nums_count * 100

print(f'{p1_percent:.2f}%')
print(f'{p2_percent:.2f}%')
print(f'{p3_percent:.2f}%')
print(f'{p4_percent:.2f}%')
print(f'{p5_percent:.2f}%')
