function solve(arr) {

    let [groups, ...values] = arr.map(Number);

    let total = values.reduce((acc, c) => acc + c);

    let gMu = 0;

    let gMo = 0;

    let gKi = 0;

    let gK = 0;

    let gE = 0;

    for (let a = 0; a < groups; a++) {

        let current = values[a];

        if (current <= 5) {

            gMu += current;

        } else if (current > 5 && current <= 12) {

            gMo += current;

        } else if (current > 12 && current <= 25) {

            gKi += current;

        } else if (current > 25 && current <= 40) {

            gK += current;

        } else {

            gE += current;

        }

    }

    return `${((gMu / total) * 100).toFixed(2)}%\n${((gMo / total) * 100).toFixed(2)}%\n${((gKi / total) * 100).toFixed(2)}%\n${((gK / total) * 100).toFixed(2)}%\n${((gE / total) * 100).toFixed(2)}%`;

}

console.log(solve([
    '10', '10', '5',
    '1', '100', '12',
    '26', '17', '37',
    '40', '78'
]));

console.log(solve(['5', '25', '41', '31', '250', '6']));