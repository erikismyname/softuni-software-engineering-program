product = input()
town = input()
qty = float(input())
price = 0
result = 0

if town == 'Sofia':
    if product == 'coffee':
        price = 0.5
    elif product == 'water':
        price = 0.8
    elif product == 'beer':
        price = 1.2
    elif product == 'sweets':
        price = 1.45
    else:
        price = 1.6
elif town == 'Plovdiv':
    if product == 'coffee':
        price = 0.4
    elif product == 'water':
        price = 0.7
    elif product == 'beer':
        price = 1.15
    elif product == 'sweets':
        price = 1.3
    else:
        price = 1.5
else:
    if product == 'coffee':
        price = 0.45
    elif product == 'water':
        price = 0.7
    elif product == 'beer':
        price = 1.1
    elif product == 'sweets':
        price = 1.35
    else:
        price = 1.55

result = price * qty

print(result)