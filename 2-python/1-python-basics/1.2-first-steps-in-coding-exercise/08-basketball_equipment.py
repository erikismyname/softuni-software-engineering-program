annual_basketball_training_price = int(input())

sneakers_price = annual_basketball_training_price * 0.6
clothes_price = sneakers_price * 0.8
ball_price = clothes_price / 4
accessories_price = ball_price / 5
total_price = annual_basketball_training_price + \
              sneakers_price + \
              clothes_price + \
              ball_price + \
              accessories_price

print(total_price)
