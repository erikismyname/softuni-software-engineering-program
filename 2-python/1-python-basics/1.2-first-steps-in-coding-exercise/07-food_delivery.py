chicken_menus_count = int(input())
fish_menus_count = int(input())
vegetarian_menus_count = int(input())

chicken_menu_price = 10.35
fish_menu_price = 12.4
vegetarian_menu_price = 8.15
delivery_price = 2.5

menus_total_price = chicken_menus_count * chicken_menu_price + \
                    fish_menus_count * fish_menu_price + \
                    vegetarian_menus_count * vegetarian_menu_price
desert_price = menus_total_price * 0.2
total_price = menus_total_price + desert_price + delivery_price

print(total_price)
