function solve(arr) {

    let [food, ...values] = arr.map(el => isNaN(el) ? el : Number(el));

    food *= 1000;

    let counter = 0;

    for (let line of values) {

        if (line == 'Adopted') {

            break;

        }

        counter++;
        if (food - line < 0) {

            food = line - food;

            break;

        }

        food -= line;


    }

    return food < 0 ? `Food is not enough. You need ${values.slice(counter).reduce((acc, c) => acc + c, food)} grams more.` : `Food is enough! Leftovers: ${food} grams.`;

}

console.log(solve([
    '4', '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted'
]));

console.log(solve(['3', '1000', '1000', '1000', 'Adopted']));

console.log(solve([
    '2', '999',
    '456', '999',
    '999', '123',
    '456', 'Adopted'
]));