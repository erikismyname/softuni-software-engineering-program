movie_budget = float(input())
statists_num = int(input())
statist_clothing_price = float(input())

movie_decor = movie_budget * 0.1

if statists_num > 150:
    statist_clothing_price *= 0.9

statists_clothing_price = statists_num * statist_clothing_price

final_sum = movie_budget - (movie_decor + statists_clothing_price)

if final_sum >= 0:
    print(f'Action!\nWingard starts filming with {final_sum:.2f} leva left.')
else:
    print(f'Not enough money!\nWingard needs {abs(final_sum):.2f} leva more.')
