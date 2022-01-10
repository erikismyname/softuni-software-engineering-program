function solve(str) {

    str = str.split(' ').map(Number);

    let avgVal = str.reduce((acc, c, i, arr) => {

        let total = acc + c;

        if (i == arr.length - 1) {

            return total / arr.length;

        }

        return acc + c;

    });

    let result = str.filter(el => el > avgVal).sort((a, b) => b - a).slice(0, 5);

    return result.length ? result.join(' ') : 'No';

}

console.log(solve('10 20 30 40 50'));

console.log(solve('5 2 3 4 -10 30 40 50 20 50 60 60 51'));

console.log(solve('1'));

console.log(solve('-1 -2 -3 -4 -5 -6'));