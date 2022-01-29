import sys

nums_count = int(input())
nums_sum = 0
max_num = -sys.maxsize
result = ''

for i in range(nums_count):
    num = int(input())
    if num > max_num:
        max_num = num
    nums_sum += num

nums_sum -= max_num

if nums_sum == max_num:
    result = f'Yes\nSum = {max_num}'
else:
    result = f'No\nDiff = {abs(max_num - nums_sum)}'

print(result)
