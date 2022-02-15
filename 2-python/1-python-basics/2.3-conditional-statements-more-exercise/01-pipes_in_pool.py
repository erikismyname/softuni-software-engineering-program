pool_v = int(input())
first_pipe_debit_h = int(input())
second_pipe_debit_h = int(input())
worker_absence_time_h = float(input())

total_debit_first_pipe = first_pipe_debit_h * worker_absence_time_h
total_debit_second_pipe = second_pipe_debit_h * worker_absence_time_h
total_debit_both_pipes = total_debit_first_pipe + total_debit_second_pipe
output = ''

if total_debit_both_pipes <= pool_v:
    curr_pool_state = total_debit_both_pipes / pool_v * 100
    total_debit_first_pipe_percent = total_debit_first_pipe / total_debit_both_pipes * 100
    total_debit_second_pipe_percent = total_debit_second_pipe / total_debit_both_pipes * 100
    output = f'The pool is {curr_pool_state:.2f}% full.' \
             f'Pipe 1: {total_debit_first_pipe_percent:.2f}%. ' \
             f'Pipe 2: {total_debit_second_pipe_percent:.2f}%.'
else:
    l_diff = total_debit_both_pipes - pool_v
    output = f'For {worker_absence_time_h:.2f} hours the pool overflows with {l_diff:.2f} liters.'

print(output)
