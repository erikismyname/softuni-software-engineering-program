needed_nylon_sq_m = int(input())
needed_paint_liters = int(input())
needed_paint_thinner_liters = int(input())
deadline_hours = int(input())

nylon_price_sq_m = 1.5
paint_price_liter = 14.5
paint_thinner_price_liter = 5
bags_price = 0.4

total_nylon_price = (needed_nylon_sq_m + 2) * nylon_price_sq_m
total_paint_price = needed_paint_liters * 1.1 * paint_price_liter
total_paint_thinner_price = needed_paint_thinner_liters * paint_thinner_price_liter
materials_total_price = total_nylon_price + \
                        total_paint_price + \
                        total_paint_thinner_price + \
                        bags_price
workers_total_price = deadline_hours * (materials_total_price * 0.3)
total_price_all = materials_total_price + workers_total_price

print(total_price_all)
