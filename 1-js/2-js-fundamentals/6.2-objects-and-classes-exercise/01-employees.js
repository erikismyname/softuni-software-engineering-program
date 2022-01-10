function solve(arr) {

    let data = {};

    arr.forEach(el => {

        data[el] = el.length;

    });

    return Object.entries(data).map(el => {

        return `Name: ${el[0]} -- Personal Number: ${el[1]}`;

    }).join('\n');

}

console.log(solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
));
/*
Name: Silas Butler -- Personal Number: 12
Name: Adnaan Buckley -- Personal Number: 14
Name: Juan Peterson -- Personal Number: 13
Name: Brendan Villarreal -- Personal Number: 18
*/