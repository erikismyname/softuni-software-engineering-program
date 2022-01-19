budget = int(input())
season = input()
fishermen_count = int(input())
ship_price_spring = 3000
ship_price_summer_autumn = 4200
ship_price_winter = 2600
price = 0

if season == 'Spring':
    price = ship_price_spring
elif season == 'Summer' or season == 'Autumn':
    price = ship_price_summer_autumn
else:
    price = ship_price_winter

if fishermen_count <= 6:
    price *= 0.9
elif 7 < fishermen_count <= 11:
    price *= 0.85
else:
    price *= 0.75

if fishermen_count % 2 == 0 and season != 'Autumn':
    price *= 0.95

result = budget - price

if result >= 0:
    print(f'Yes! You have {result:.2f} leva left.')
else:
    print(f'Not enough money! You need {abs(result):.2f} leva.')
