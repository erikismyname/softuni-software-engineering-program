function solve([budget, season]) {

    budget = Number(budget);

    let type = '';

    let car = '';

    let price = 0;

    if (budget <= 100) {

        type = 'Economy class';

        if (season == 'Summer') {

            car = 'Cabrio';

            price = budget * 0.35;

        } else {

            car = 'Jeep';

            price = budget * 0.65;

        }
        
    } else if (budget > 100 && budget <= 500) {

        type = 'Compact class';

        if (season == 'Summer') {

            car = 'Cabrio';

            price = budget * 0.45;

        } else {

            car = 'Jeep';

            price = budget * 0.80;

        }

    } else {

        type = 'Luxury class';

        car = 'Jeep';

        price = budget * 0.90;

    }

    return `${type}\n${car} - ${price.toFixed(2)}`;

}

console.log(solve(['450', 'Summer']));
console.log(solve(['450', 'Winter']));
console.log(solve(['1010', 'Summer']));
console.log(solve(['99.99', 'Summer']));
console.log(solve(['1010', 'Winter']));
console.log(solve(['70.50', 'Winter']));