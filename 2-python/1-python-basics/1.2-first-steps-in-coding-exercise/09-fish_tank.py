aquarium_length_cm = int(input())
aquarium_width_cm = int(input())
aquarium_height_cm = int(input())
taken_area_percent = float(input())

taken_area = (100 - taken_area_percent) / 100
aquarium_v_liters = (aquarium_length_cm *
                     aquarium_width_cm *
                     aquarium_height_cm) / 1000
total_liters_needed = aquarium_v_liters * taken_area

print(total_liters_needed)
