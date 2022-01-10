function solve([money, year]) {

    money = Number(money);

    year = Number(year);

    let age = 18;

    let neededMoney = 0;

    for (let a = 1800; a <= year; a++) {

        if (a % 2 == 0) {

            neededMoney += 12000;

        } else {

            neededMoney += (12000 + (50 * age));

        }

        age++;

    }

    return money - neededMoney >= 0 ? `Yes! He will live a carefree life and will have ${(money - neededMoney).toFixed(2)} dollars left.` : `He will need ${(neededMoney - money).toFixed(2)} dollars to survive.`;

}

console.log(solve(['50000', '1802']));
console.log(solve(['100000.15', '1808']));