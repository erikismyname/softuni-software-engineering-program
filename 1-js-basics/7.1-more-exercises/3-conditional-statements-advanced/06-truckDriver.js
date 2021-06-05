function solve([season, monthlyKm]) {

    monthlyKm = Number(monthlyKm);

    price = 0;

    if (monthlyKm <= 5000) {

        if (season == 'Spring' || season == 'Autumn') {

            price = monthlyKm * 0.75;

        } else if (season == 'Summer') {

            price = monthlyKm * 0.90;

        } else {

            price = monthlyKm * 1.05;

        }

    } else if (monthlyKm > 5000 && monthlyKm <= 10000) {

        if (season == 'Spring' || season == 'Autumn') {

            price = monthlyKm * 0.95;

        } else if (season == 'Summer') {

            price = monthlyKm * 1.10;

        } else {

            price = monthlyKm * 1.25;

        }

    } else if (monthlyKm > 10000 && monthlyKm <= 20000) {

        price = monthlyKm * 1.45;

    }

    return ((price * 4) * 0.90).toFixed(2);

}

console.log(solve(['Summer', '3455']));
console.log(solve(['Winter', '4350']));
console.log(solve(['Spring', '1600']));
console.log(solve(['Winter', '5678']));
console.log(solve(['Autumn', '8600']));
console.log(solve(['Winter', '16042']));
console.log(solve(['Spring', '16942']));