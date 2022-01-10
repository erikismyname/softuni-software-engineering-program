function solve(arr) {

    let power = {

        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14

    };

    let type = {

        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1

    };

    let data = {};

    arr.forEach(el => {

        let [name, cards] = el.split(': ');

        if (!data[name]) {

            data[name] = [];

        }

        data[name].push(...cards.split(', '))

    });

    Object.keys(data).forEach(el => {

        let sum = 0;

        [...new Set(data[el])].forEach(el => {

            let face = el.slice(0, -1);

            let color = el.slice(-1);

            sum += (power[face] * type[color]);

        });

        data[el] = sum;

    });

    return Object.entries(data).map(el => `${el[0]}: ${el[1]}`).join('\n');

}

console.log(solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
));
/*
Peter: 167
Tomas: 175
Andrea: 197
*/