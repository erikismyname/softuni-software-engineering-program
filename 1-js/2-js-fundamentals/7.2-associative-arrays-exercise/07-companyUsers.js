function solve(arr) {

    let data = {};

    let result = [];

    arr.forEach(el => {

        let [company, id] = el.split(' -> ');

        if (!data[company]) {

            data[company] = [];

        }

        if (!data[company].includes(id)) {

            data[company].push(id);

        }

    });

    Object.entries(data).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => {

        result.push(el[0]);

        el[1].forEach(el => {

            result.push(`-- ${el}`);

        });

    });

    return result.join('\n');

}

console.log(solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]

));
/*
HP
-- BB12345
Microsoft
-- CC12345
SoftUni
-- AA12345
-- BB12345
*/