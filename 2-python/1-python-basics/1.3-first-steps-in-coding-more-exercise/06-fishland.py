skumriya_price_kg = float(input())
tsatsa_price_kg = float(input())
palamud_kg = float(input())
safrid_kg = float(input())
seashell_kg = int(input())

palamud_price_kg = skumriya_price_kg * 1.6
safrid_price_kg = tsatsa_price_kg * 1.8
seashell_price_kg = 7.5

total_seashell_price = seashell_kg * seashell_price_kg
total_palamud_price = palamud_kg * palamud_price_kg
total_safrid_price = safrid_kg * safrid_price_kg
total_all = total_seashell_price + total_palamud_price + total_safrid_price

print(f'{total_all:.2f}')
