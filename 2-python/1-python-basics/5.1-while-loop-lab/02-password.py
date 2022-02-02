username = input()
password = input()
curr_password_input = input()

while curr_password_input != password:
    curr_password_input = input()

print(f'Welcome {username}!')
