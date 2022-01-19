projection_type = input()
rows_count = int(input())
cols_count = int(input())
premiere_ticket_price = 12
normal_ticket_price = 7.5
discount_ticket_price = 5
price = 0
result = 0

if projection_type == 'Premiere':
    price = premiere_ticket_price
elif projection_type == 'Normal':
    price = normal_ticket_price
else:
    price = discount_ticket_price

result = rows_count * cols_count * price

print(f'{result:.2f} leva')
