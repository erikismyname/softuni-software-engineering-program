function solve([hood, ...arr]) {

    let data = {};

    let result = [];

    hood.split(', ').map(el => data[el] = []);

    arr.forEach(el => {

        let [hoodName, personName] = el.split(' - ');

        if (hood.includes(hoodName)) {

            data[hoodName].push(personName);

        }

    });

    Object.entries(data).sort((a, b) => b[1].length - a[1].length).forEach(el => {

        result.push(`${el[0]}: ${el[1].length}`);

        result.push(el[1].map(el => `--${el}`).join('\n'));

    });

    return result.join('\n');

}

console.log(solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
));
/*
Bright Mews: 2
--Garry
--Andrea
Abbey Street: 1
--Billy
Herald Street: 0
*/