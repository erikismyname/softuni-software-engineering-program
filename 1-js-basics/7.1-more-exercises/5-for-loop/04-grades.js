function solve(arr) {

    let students = Number(arr.shift());

    let five = 0;

    let four = 0;

    let three = 0;

    let two = 0;

    let avg = 0;

    for (let a = 0; a < arr.length; a++) {

        let current = Number(arr[a]);

        if (current >= 2 && current <= 2.99) {

            two++;

        } else if (current >= 3 && current <= 3.99) {

            three++;

        } else if (current >= 4 && current <= 4.99) {

            four++;

        } else if (current >= 5.00) {

            five++;

        }

        avg += current;

    }

    return `Top students: ${((five / students) * 100).toFixed(2)}%\nBetween 4.00 and 4.99: ${((four / students) * 100).toFixed(2)}%\nBetween 3.00 and 3.99: ${((three / students) * 100).toFixed(2)}%\nFail: ${((two / students) * 100).toFixed(2)}%\nAverage: ${(avg / students).toFixed(2)}`;

}

console.log(solve([
    '10', '3', '2.99',
    '5.68', '3.01', '4',
    '4', '6', '4.5',
    '2.44', '5', ''
]));
// console.log(solve(['6', '2', '3', '4', '5', '6', '2.2']));