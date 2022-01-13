budget = float(input())
video_cards_count = int(input())
processors_count = int(input())
ram_memory_count = int(input())

video_card_price = 250

total_video_cards_price = video_card_price * video_cards_count
total_processors_price = total_video_cards_price * 0.35 * processors_count
total_ram_memory_price = total_video_cards_price * 0.1 * ram_memory_count

final_price = total_video_cards_price + total_processors_price + total_ram_memory_price

if video_cards_count > processors_count:
    final_price *= 0.85

money_left = budget - final_price

if final_price <= budget:
    print(f'You have {money_left:.2f} leva left!')
else:
    print(f'Not enough money! You need {abs(money_left):.2f} leva more!')
