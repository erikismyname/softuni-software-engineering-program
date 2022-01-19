product = input()
product_type = ''

if product == 'banana' \
        or product == 'apple' \
        or product == 'kiwi' \
        or product == 'cherry' \
        or product == 'lemon' \
        or product == 'grapes':
    product_type = 'fruit'
elif product == 'tomato' \
        or product == 'cucumber' \
        or product == 'pepper' \
        or product == 'carrot':
    product_type = 'vegetable'
else:
    product_type = 'unknown'

print(product_type)
