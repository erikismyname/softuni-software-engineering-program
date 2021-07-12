function solve(arr) {

    let data = {};

    let products = arr.filter((el, i) => i % 2 == 0);

    let quantities = arr.filter((el, i) => i % 2 != 0).map(Number);

    products.forEach((el, i) => {

        !data[el] ? data[el] = quantities[i] : data[el] += quantities[i];

    });

    return Object.entries(data).map(el => `${el[0]} -> ${el[1]}`).join('\n');

}

console.log(solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
));
/*
Gold -> 155
Silver -> 10
Copper -> 17
*/