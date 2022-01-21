a = int(input())
b = int(input())
operator = input()
result = 0
output = ''

if operator == '+':
    result = a + b
    output = f'{a} + {b} = {result}'
elif operator == '-':
    result = a - b
    output = f'{a} - {b} = {result}'
elif operator == '*':
    result = a * b
    output = f'{a} * {b} = {result}'
else:
    if b == 0:
        output = f'Cannot divide {a} by zero'
    elif operator == '/':
        result = a / b
        output = f'{a} / {b} = {result:.2f}'
    else:
        result = a % b
        output = f'{a} % {b} = {result}'

if operator == '+' or operator == '-' or operator == '*':
    output += ' - even' if result % 2 == 0 else ' - odd'

print(output)
