open_tabs_count = int(input())
salary = int(input())
facebook_fee = 150
instagram_fee = 100
reddit_fee = 50
is_salary_lost = False

for i in range(open_tabs_count):
    curr_tab = input()
    if curr_tab == 'Facebook':
        salary -= facebook_fee
    elif curr_tab == 'Instagram':
        salary -= instagram_fee
    elif curr_tab == 'Reddit':
        salary -= reddit_fee

    if salary <= 0:
        is_salary_lost = True
        break

output = ''

if is_salary_lost:
    output = 'You have lost your salary.'
else:
    output = salary

print(output)
