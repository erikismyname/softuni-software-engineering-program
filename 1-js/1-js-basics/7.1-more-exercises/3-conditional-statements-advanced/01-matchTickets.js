function solve([budget, category, people]) {

    budget = Number(budget);

    people = Number(people);

    if (people >= 1 && people <= 4) {

        budget *= 0.25;

    } else if (people >= 5 && people <= 9) {

        budget *= 0.40;

    } else if (people >= 10 && people <= 24) {

        budget *= 0.50;

    } else if (people >= 25 && people <= 49) {

        budget *= 0.60;

    } else {

        budget *= 0.75;

    }

    let ticketsPrice = 0;

    if (category == 'Normal') {

        ticketsPrice = people * 249.99;

    } else {

        ticketsPrice = people * 499.99;

    }

    return ticketsPrice <= budget ? `Yes! You have ${(budget - ticketsPrice).toFixed(2)} leva left.` : `Not enough money! You need ${(ticketsPrice - budget).toFixed(2)} leva.`;

}

console.log(solve(['1000', 'Normal', '1']));
console.log(solve(['30000', 'VIP', '49']));
console.log(solve(['50000', 'Normal', '200']));