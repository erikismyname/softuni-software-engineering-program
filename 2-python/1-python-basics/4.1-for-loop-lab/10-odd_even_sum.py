nums_count = int(input())
even_nums_count = 0
odd_nums_count = 0
result = ''

for i in range(nums_count):
    num = int(input())
    if i % 2 == 0:
        even_nums_count += num
    else:
        odd_nums_count += num

if even_nums_count == odd_nums_count:
    result = f'Yes\nSum = {even_nums_count}'
else:
    result = f'No\nDiff = {abs(even_nums_count - odd_nums_count)}'

print(result)
