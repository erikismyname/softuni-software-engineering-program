function solve([budget, statists, pricePerPerson]) {

    budget = Number(budget);
    statists = Number(statists);
    pricePerPerson = Number(pricePerPerson);

    let decorPrice = budget * 0.10;

    let clothingPrice = 0;

    statists > 150 ? clothingPrice = (statists * pricePerPerson) * 0.90 : clothingPrice = statists * pricePerPerson;

    return decorPrice + clothingPrice > budget ? `Not enough money!\nWingard needs ${((decorPrice + clothingPrice) - budget).toFixed(2)} leva more.` : `Action!\nWingard starts filming with ${(budget - (decorPrice + clothingPrice)).toFixed(2)} leva left.`;

}

console.log(solve(['20000', '120', '55.5']));
// Action!
// Wingard starts filming with 11340.00 leva left.

console.log(solve(['9587.88', '222', '55.68']));
// Not enough money!
// Wingard needs 2495.77 leva more.