function solve(arr) {

    let regular = [];

    let vip = [];

    let line = arr.shift();

    while (line != 'PARTY') {

        isNaN(line[0]) ? regular.push(line) : vip.push(line);

        line = arr.shift();

    }

    arr.forEach(el => {

        isNaN(el[0]) ? regular.splice(regular.indexOf(el), 1) : vip.splice(vip.indexOf(el), 1);

    });

    return `${regular.length + vip.length}\n${vip.join('\n')}\n${regular.join('\n')}`;

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