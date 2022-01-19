town = input()
sales_count = float(input())
commission_percent = 0
result = 0

if town == 'Sofia':
    if 0 <= sales_count <= 500:
        commission_percent = 5
    elif 500 < sales_count <= 1000:
        commission_percent = 7
    elif 1000 < sales_count <= 10000:
        commission_percent = 8
    elif sales_count > 10000:
        commission_percent = 12
elif town == 'Varna':
    if 0 <= sales_count <= 500:
        commission_percent = 4.5
    elif 500 < sales_count <= 1000:
        commission_percent = 7.5
    elif 1000 < sales_count <= 10000:
        commission_percent = 10
    elif sales_count > 10000:
        commission_percent = 13
elif town == 'Plovdiv':
    if 0 <= sales_count <= 500:
        commission_percent = 5.5
    elif 500 < sales_count <= 1000:
        commission_percent = 8
    elif 1000 < sales_count <= 10000:
        commission_percent = 12
    elif sales_count > 10000:
        commission_percent = 14.5

result = sales_count * commission_percent / 100

if result:
    print(f'{result:.2f}')
else:
    print('error')
