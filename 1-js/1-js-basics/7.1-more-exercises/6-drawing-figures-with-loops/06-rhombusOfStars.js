function solve([num]) {

    num = Number(num);

    let result = [];

    for (let a = 1; a <= num; a++) {

        result.push(' '.repeat(num - a) + '* ' + '* '.repeat(a - 1));

    }

    for (let b = num - 1; b >= 1; b--) {

        result.push(' '.repeat(num - b) + '* ' + '* '.repeat(b - 1));

    }

    return result.join('\n');

}

console.log(solve(['1']));