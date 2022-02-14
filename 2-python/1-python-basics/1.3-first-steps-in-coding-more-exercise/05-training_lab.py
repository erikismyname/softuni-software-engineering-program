lab_length_cm = float(input()) * 100
lab_width_cm = float(input()) * 100

hall_width_cm = 100
working_place_length_cm = 120
working_place_width_cm = 70

total_working_places_length = lab_length_cm // working_place_length_cm
total_working_places_width = (lab_width_cm - hall_width_cm) // working_place_width_cm
total_working_places = total_working_places_length * total_working_places_width - 3

print(total_working_places)
