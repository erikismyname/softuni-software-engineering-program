budget = float(input())
season = input()
destination = ''
place_to_stay = ''
place_price_percent = 0

if budget <= 100:
    destination = 'Bulgaria'
    if season == 'summer':
        place_price_percent = 30
    else:
        place_price_percent = 70
elif budget <= 1000:
    destination = 'Balkans'
    if season == 'summer':
        place_price_percent = 40
    else:
        place_price_percent = 80
else:
    destination = 'Europe'
    place_price_percent = 90

if season == 'summer' and destination != 'Europe':
    place_to_stay = 'Camp'
else:
    place_to_stay = 'Hotel'

place_price = budget * place_price_percent / 100

print(f'Somewhere in {destination}\n{place_to_stay} - {place_price:.2f}')
