total_square_m = float(input())

total_square_m_price = total_square_m * 7.61
total_square_m_price_discount = total_square_m_price * 0.82
discount = total_square_m_price * 0.18

print(f'The final price is: {total_square_m_price_discount} lv.')
print(f'The discount is: {discount} lv')
