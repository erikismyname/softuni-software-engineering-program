trip_price = float(input())
puzzles_count = int(input())
dolls_count = int(input())
bears_count = int(input())
minions_count = int(input())
trucks_count = int(input())

puzzle_price = 2.6
doll_price = 3
bear_price = 4.1
minion_price = 8.2
truck_price = 2

total_sum = puzzles_count * puzzle_price + \
            dolls_count * doll_price + \
            bears_count * bear_price + \
            minions_count * minion_price + \
            trucks_count * truck_price
toys_count = puzzles_count + dolls_count + bears_count + minions_count + trucks_count

if toys_count >= 50:
    total_sum *= 0.75

total_sum = total_sum * 0.9 - trip_price

if total_sum >= 0:
    print(f'Yes! {total_sum:.2f} lv left.')
else:
    print(f'Not enough money! {abs(total_sum):.2f} lv needed.')
