function solve([budget, season]) {

    budget = Number(budget);

    let location = '';

    let type = '';

    let price = 0;

    if (budget <= 1000) {

        type = 'Camp';

        if (season == 'Summer') {

            location = 'Alaska';

            price = budget * 0.65;

        } else {

            location = 'Morocco';

            price = budget * 0.45;

        }

    } else if (budget > 1000 && budget <= 3000) {

        type = 'Hut';

        if (season == 'Summer') {

            location = 'Alaska';

            price = budget * 0.80;

        } else {

            location = 'Morocco';

            price = budget * 0.60;

        }

    } else {

        type = 'Hotel';

        if (season == 'Summer') {

            location = 'Alaska';

        } else {

            location = 'Morocco';

        }

        price = budget * 0.90;

    }

    return `${location} - ${type} - ${price.toFixed(2)}`;
    
}

console.log(solve(['800', 'Summer']));
console.log(solve(['799.50', 'Winter']));
console.log(solve(['3460', 'Summer']));
console.log(solve(['1100', 'Summer']));
console.log(solve(['5000', 'Winter']));
console.log(solve(['2543.99', 'Winter']));