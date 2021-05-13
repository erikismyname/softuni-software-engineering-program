function solve([budget, season]) {

    budget = Number(budget);

    let destination = '';

    let place = '';

    let total = '';

    if (budget <= 100) {

        destination = 'Bulgaria';

        season == 'summer' ? total = budget * 0.30 : total = budget * 0.70;

    } else if (budget > 100 && budget <= 1000) {

        destination = 'Balkans';

        season == 'summer' ? total = budget * 0.40 : total = budget * 0.80;

    } else {

        destination = 'Europe';

        total = budget * 0.90;

    }

    season == 'summer' && destination != 'Europe' ? place = 'Camp' : place = 'Hotel';

    return `Somewhere in ${destination}\n${place} - ${total.toFixed(2)}`;

}

console.log(solve(['50', 'summer']));
console.log(solve(['75', 'winter']));
console.log(solve(['312', 'summer']));
console.log(solve(['678.53', 'winter']));
console.log(solve(['1500', 'summer']));