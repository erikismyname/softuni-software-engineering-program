function solve(day, age) {

    if (day == 'Weekday') {

        if (age >= 0 && age <= 18) {

            return '12$';

        } else if (age > 18 && age <= 64) {

            return '18$';

        } else if (age > 64 && age <= 122) {

            return '12$';

        }

        return 'Error!';

    } else if (day == 'Weekend') {

        if (age >= 0 && age <= 18) {

            return '15$';

        } else if (age > 18 && age <= 64) {

            return '20$';

        } else if (age > 64 && age <= 122) {

            return '15$';

        }

        return 'Error!';

    }

    if (age >= 0 && age <= 18) {

        return '5$';

    } else if (age > 18 && age <= 64) {

        return '12$';

    } else if (age > 64 && age <= 122) {

        return '10$';

    }

    return 'Error!';

}

console.log(solve('Weekday', 42)); // 18$

console.log(solve('Holiday', -12)); // Error!!