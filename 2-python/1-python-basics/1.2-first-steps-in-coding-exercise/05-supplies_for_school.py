pens_packages_count = int(input())
markers_packages_count = int(input())
board_detergent_liters = int(input())
discount_percent = int(input())

pens_package_price = 5.8
marker_package_price = 7.2
board_detergent_liter_price = 1.2

discount = (100 - discount_percent) / 100
total_sum = (pens_packages_count * pens_package_price +
             markers_packages_count * marker_package_price +
             board_detergent_liters * board_detergent_liter_price) * \
            discount

print(total_sum)
