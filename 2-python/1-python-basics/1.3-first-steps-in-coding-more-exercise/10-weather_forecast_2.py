degrees = float(input())

output = 'unknown'

if 5 <= degrees <= 11.9:
    output = 'Cold'
elif 12 <= degrees <= 14.9:
    output = 'Cool'
elif 15 <= degrees <= 20:
    output = 'Mild'
elif 20.1 <= degrees <= 25.9:
    output = 'Warm'
elif 26 <= degrees <= 35:
    output = 'Hot'

print(output)
