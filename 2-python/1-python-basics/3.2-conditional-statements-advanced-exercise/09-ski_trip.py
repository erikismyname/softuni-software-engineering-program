days_to_stay = int(input())
room_type = input()
rate = input()
room_for_one_person_price = 18
apartment_price = 25
president_apartment_price = 35
nights_to_stay = days_to_stay - 1
price = 0

if room_type == 'room for one person':
    price = room_for_one_person_price * nights_to_stay
elif room_type == 'apartment':
    if days_to_stay < 10:
        price = apartment_price * nights_to_stay * 0.7
    elif 10 <= days_to_stay <= 15:
        price = apartment_price * nights_to_stay * 0.65
    else:
        price = apartment_price * nights_to_stay * 0.5
else:
    if days_to_stay < 10:
        price = president_apartment_price * nights_to_stay * 0.9
    elif 10 <= days_to_stay <= 15:
        price = president_apartment_price * nights_to_stay * 0.85
    else:
        price = president_apartment_price * nights_to_stay * 0.8

if rate == 'positive':
    price *= 1.25
else:
    price *= 0.9

print(f'{price:.2f}')
