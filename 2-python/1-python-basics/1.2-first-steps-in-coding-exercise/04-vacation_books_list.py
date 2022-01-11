current_book_pages = int(input())
pages_read_per_hour = int(input())
deadline_days = int(input())

total_hours = current_book_pages // pages_read_per_hour

hours_per_day = total_hours // deadline_days

print(hours_per_day)