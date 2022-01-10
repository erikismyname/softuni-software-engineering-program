function solve(matrix) {

    let data = {};

    matrix.forEach(el => {

        el.forEach(el => {

            let [flight, ...val] = el.split(' ');

            if (!data[flight]) {

                data[flight] = val.join(' ');

            }

        });

    });

    return data

}

console.log(solve([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
));
/*
{ Destination: 'Alabama', Status: 'Cancelled' }
{ Destination: 'California', Status: 'Cancelled' }
{ Destination: 'Texas', Status: 'Cancelled' }
*/