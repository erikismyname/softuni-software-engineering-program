function solve(arr) {

    let data = {

        regular: [],

        vip: []

    };

    let line = arr.shift();

    while (line != 'PARTY') {

        isNaN(line[0]) ? data.regular.push(line) : data.vip.push(line);

        line = arr.shift();

    }

    arr.forEach(el => {

        isNaN(el[0]) ? data.regular.splice(data.regular.indexOf(el), 1) : data.vip.splice(data.vip.indexOf(el), 1);

    });

    let entries = Object.entries(data);

    return `${entries[0][1].length + entries[1][1].length}\n${entries[1][1].join('\n')}\n${entries[0][1].join('\n')}`;

}

console.log(solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
));
/*
2
7IK9Yo0h
tSzE5t0p
*/