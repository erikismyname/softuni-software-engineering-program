deposit = input()
money = 0

while deposit != 'NoMoreMoney':
    deposit = float(deposit)
    if deposit < 0:
        print('Invalid operation!')
        break
    else:
        print(f'Increase: {deposit:.2f}')
        money += deposit
        deposit = input()

print(f'Total: {money:.2f}')
