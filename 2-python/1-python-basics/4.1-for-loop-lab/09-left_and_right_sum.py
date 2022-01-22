num_pairs_count = int(input())
left_half_sum = 0
right_half_sum = 0
result = ''

for i in range(num_pairs_count * 2):
    num = int(input())
    if i < num_pairs_count:
        left_half_sum += num
    else:
        right_half_sum += num

if left_half_sum == right_half_sum:
    result = f'Yes, sum = {left_half_sum}'
else:
    result = f'No, diff = {abs(left_half_sum - right_half_sum)}'

print(result)
