vegetables_price_kg = float(input())
fruits_price_kg = float(input())
vegetables_kg = int(input())
fruits_kg = int(input())

euro_to_bgn_course = 1.94

vegetables_profit = vegetables_price_kg * vegetables_kg
fruits_profit = fruits_price_kg * fruits_kg
total_profit_euro = (vegetables_profit + fruits_profit) / euro_to_bgn_course

print(f'{total_profit_euro:.2f}')
