age_lilly = int(input())
price_washing_machine = float(input())
price_per_toy = int(input())
count_toys = 0
money = 0

for year in range(1, age_lilly + 1):
    if year % 2 == 0:
        money += 10 * (year // 2) - 1
    else:
        count_toys += 1

money += count_toys * price_per_toy
difference = money - price_washing_machine
output = ''

if difference >= 0:
    output = f'Yes! {difference:.2f}'
else:
    output = f'No! {abs(difference):.2f}'

print(output)
