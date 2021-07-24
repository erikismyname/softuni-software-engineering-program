function solve([n, ...arr]) {

    n = Number(n);

    let result = [];

    let data = {};

    let actions = {

        Rate: (plant, [rating]) => {

            data[plant].ratings.push(Number(rating));

        },

        Update: (plant, [newRar]) => {

            data[plant].rar = Number(newRar);

        },

        Reset: (plant) => {

            data[plant].ratings = [];

        }

    };

    arr.slice(0, n).forEach(el => {

        let [plant, rar] = el.split('<->');

        rar = Number(rar);

        data[plant] = { rar, ratings: [] };

    });

    arr.slice(n, -1).forEach(el => {

        let [command, plant, ...values] = el.split(' ');

        command = command.slice(0, -1);

        if (validate(command, plant)) {

            actions[command](plant, values.filter(el => el != '-'));

        } else {

            result.push('error');

        }

    });

    result.push('Plants for the exhibition:');

    Object.entries(data).forEach(el => {

        data[el[0]].ratings = el[1].ratings.reduce(reducer, 0);

    });

    Object.entries(data).sort((a, b) => b[1].rar - a[1].rar || b[1].ratings - a[1].ratings).map(el => `- ${el[0]}; Rarity: ${el[1].rar}; Rating: ${el[1].ratings.toFixed(2)}`).forEach(el => result.push(el));

    return result.join('\n');

    function reducer(acc, c, i, arr) {

        let total = acc + c;

        if (i == arr.length - 1) {

            return total / arr.length;

        }

        return total;

    }

    function validate(command, plant) {

        return (command == 'Rate' || command == 'Update' || command == 'Reset') && data[plant];

    }

}

console.log(solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]));

console.log(solve([
    '3',
    'Candelabra<->10',
    'Oahu<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
]));