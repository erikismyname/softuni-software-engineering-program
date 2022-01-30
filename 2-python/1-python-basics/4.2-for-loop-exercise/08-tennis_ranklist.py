from math import floor

tournaments_count = int(input())
starting_rank_list_points = int(input())
w_points = 2000
f_points = 1200
sf_points = 720
total_points = starting_rank_list_points
won_tournaments = 0

for i in range(tournaments_count):
    status = input()
    if status == 'W':
        won_tournaments += 1
        total_points += w_points
    elif status == 'F':
        total_points += f_points
    else:
        total_points += sf_points

avg_tournament_points = floor((total_points - starting_rank_list_points) / tournaments_count)
won_tournaments_percent = won_tournaments / tournaments_count * 100

print(f'Final points: {total_points}')
print(f'Average points: {avg_tournament_points}')
print(f'{won_tournaments_percent:.2f}%')
