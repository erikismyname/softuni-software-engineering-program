function solve(arr) {

    let data = {};

    arr.forEach(el => {

        let [name, ...grades] = el.split(' ');

        grades = grades.map(Number);

        if (!data[name]) {

            data[name] = grades;

        } else {

            data[name].push(...grades);

        }

    });

    return Object.entries(data).sort((a, b) => a[1].reduce(reducer) - b[1].reduce(reducer)).map(el => `${el[0]}: ${el[1].join(', ')}`).join('\n');

    function reducer(acc, c, i, arr) {

        let total = acc + c;

        if (i == arr.length - 1) {

            return total / arr.length;

        }

        return total;

    }

}

console.log(solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
));
/*
Tammy: 2, 4, 3
Lilly: 4, 6, 6, 5
Tim: 5, 6, 6, 6
*/