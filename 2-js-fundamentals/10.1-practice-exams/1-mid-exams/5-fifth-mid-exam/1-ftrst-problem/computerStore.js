function solve(arr) {

    let total = 0;

    let taxes = 0;

    let type = '';

    let result = [];

    arr.map(el => isNaN(el) ? el : Number(el)).forEach(el => {

        if (el < 0) {

            result.push('Invalid price!');

        } else if (isNaN(el)) {

            type = el;

        } else {

            total += el;

            taxes += (el * 0.20);

        }

    });

    if (total == 0) {

        return `${result.join('\n')}\nInvalid order!`;

    }

    return `${result.join('\n')}\nCongratulations you\'ve just bought a new computer!\nPrice without taxes: ${total.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n${'-'.repeat(11)}\nTotal price: ${type == 'regular' ? (total + taxes).toFixed(2) : ((total + taxes) * 0.90).toFixed(2)}$`;

}

console.log(solve([
    '1050', '200',
    '450', '2',
    '18.50', '16.86',
    'special'
]));

console.log(solve([
    '1023', '15',
    '-20', '-5.50',
    '450', '20',
    '17.66', '19.30',
    'regular'
]));

console.log(solve(['regular']));