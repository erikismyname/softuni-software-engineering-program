import sys

num = input()
max_num = -sys.maxsize

while num != 'Stop':
    num = int(num)
    if num > max_num:
        max_num = num
    num = input()

print(max_num)
