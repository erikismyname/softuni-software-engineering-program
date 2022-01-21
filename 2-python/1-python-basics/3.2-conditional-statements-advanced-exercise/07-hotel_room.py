month_name = input()
nights_count = int(input())
apartment_price = nights_count
studio_price = nights_count

if month_name == 'May' or month_name == 'October':
    apartment_price *= 65
    studio_price *= 50
    if 7 < nights_count <= 14:
        studio_price *= 0.95
    elif nights_count > 14:
        studio_price *= 0.7
elif month_name == 'June' or month_name == 'September':
    apartment_price *= 68.7
    studio_price *= 75.2
    if nights_count > 14:
        studio_price *= 0.8
else:
    apartment_price *= 77
    studio_price *= 76

if nights_count > 14:
    apartment_price *= 0.9

print(f'Apartment: {apartment_price:.2f} lv.\nStudio: {studio_price:.2f} lv.')
