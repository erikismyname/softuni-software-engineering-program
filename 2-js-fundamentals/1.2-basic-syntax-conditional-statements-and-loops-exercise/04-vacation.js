function solve(people, type, day) {

    let result = 0;

    if (type == 'Students') {

        if (day == 'Friday') {

            result = people * 8.45;

        } else if (day == 'Saturday') {

            result = people * 9.80;

        } else {

            result = people * 10.46;

        }

        if (people >= 30) {

            result *= 0.85;
    
        }

    } else if (type == 'Business') {

        if (people >= 100) {

            people -= 10;

        }

        if (day == 'Friday') {

            result = people * 10.90;

        } else if (day == 'Saturday') {

            result = people * 15.60;

        } else {

            result = people * 16;

        }

    } else {

        if (day == 'Friday') {

            result = people * 15;

        } else if (day == 'Saturday') {

            result = people * 20;

        } else {

            result = people * 22.50;

        }

        if (people >= 10 && people <= 20) {

            result *= 0.95;

        }

    }

    return `Total price: ${result.toFixed(2)}`

}

console.log(solve(30, 'Students', 'Sunday')); // Total price: 266.73