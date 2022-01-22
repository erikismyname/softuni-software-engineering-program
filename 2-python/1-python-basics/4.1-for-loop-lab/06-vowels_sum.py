text = input()
letter_a_val = 1
letter_e_val = 2
letter_i_val = 3
letter_o_val = 4
letter_u_val = 5
result = 0

for i in range(0, len(text)):
    curr_char = text[i]
    if curr_char == 'a':
        result += letter_a_val
    elif curr_char == 'e':
        result += letter_e_val
    elif curr_char == 'i':
        result += letter_i_val
    elif curr_char == 'o':
        result += letter_o_val
    elif curr_char == 'u':
        result += letter_u_val

print(result)
