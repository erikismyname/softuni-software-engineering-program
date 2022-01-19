flowers_type = input()
flowers_count = int(input())
budget = int(input())
rose_price = 5
dahlia_price = 3.8
tulip_price = 2.8
narcissus_price = 3
gladiolus_price = 2.5
cost = 0

if flowers_type == 'Roses':
    cost = rose_price * flowers_count
    if flowers_count > 80:
        cost *= 0.9
elif flowers_type == 'Dahlias':
    cost = dahlia_price * flowers_count
    if flowers_count > 90:
        cost *= 0.85
elif flowers_type == 'Tulips':
    cost = tulip_price * flowers_count
    if flowers_count > 80:
        cost *= 0.85
elif flowers_type == 'Narcissus':
    cost = narcissus_price * flowers_count
    if flowers_count < 120:
        cost *= 1.15
else:
    cost = gladiolus_price * flowers_count
    if flowers_count < 80:
        cost *= 1.20

result = budget - cost

if result >= 0:
    print(f'Hey, you have a great garden with {flowers_count} {flowers_type} and {result:.2f} leva left.')
else:
    print(f'Not enough money, you need {abs(result):.2f} leva more.')
