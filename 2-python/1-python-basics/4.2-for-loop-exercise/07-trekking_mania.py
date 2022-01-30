groups_count = int(input())
total_people = 0
g1_size = 0
g2_size = 0
g3_size = 0
g4_size = 0
g5_size = 0

for i in range(groups_count):
    cur_group_size = int(input())
    total_people += cur_group_size
    if cur_group_size <= 5:
        g1_size += cur_group_size
    elif cur_group_size <= 12:
        g2_size += cur_group_size
    elif cur_group_size <= 25:
        g3_size += cur_group_size
    elif cur_group_size <= 40:
        g4_size += cur_group_size
    else:
        g5_size += cur_group_size

g1_percent = g1_size / total_people * 100
g2_percent = g2_size / total_people * 100
g3_percent = g3_size / total_people * 100
g4_percent = g4_size / total_people * 100
g5_percent = g5_size / total_people * 100

print(f'{g1_percent:.2f}%')
print(f'{g2_percent:.2f}%')
print(f'{g3_percent:.2f}%')
print(f'{g4_percent:.2f}%')
print(f'{g5_percent:.2f}%')
