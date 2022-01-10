function solve([budget, season, num]) {

    budget = Number(budget);

    num = Number(num);

    let total = 0;

    let data = {

        'Spring': 3000,

        'Summer': 4200,

        'Autumn': 4200,

        'Winter': 2600

    }

    total += data[season];

    if (num <= 6) {

        total *= 0.90;

    } else if (num > 6 && num <= 11) {

        total *= 0.85;

    } else {

        total *= 0.75;

    }

    if (num % 2 == 0 && season != 'Autumn') {

        total *= 0.95;

    }

    return total <= budget ? `Yes! You have ${(budget - total).toFixed(2)} leva left.` : `Not enough money! You need ${(total - budget).toFixed(2)} leva.`;

}

console.log(solve(['2000', 'Winter', '13']));