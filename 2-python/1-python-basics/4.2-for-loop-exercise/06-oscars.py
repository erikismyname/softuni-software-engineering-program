actor_name = input()
academy_points = float(input())
judges_count = int(input())
total_points = academy_points
needed_points = 1250.5

for i in range(judges_count):
    judge_name = input()
    judge_points = float(input())
    calculated_points = len(judge_name) * judge_points / 2
    total_points += calculated_points
    if total_points > needed_points:
        break

difference = total_points - needed_points
output = ''

if difference > 0:
    output = f'Congratulations, {actor_name} got a nominee for leading role with {total_points:.1f}!'
else:
    output = f'Sorry, {actor_name} you need {abs(difference):.1f} more!'

print(output)
