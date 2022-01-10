function solve([num]) {

    num = Number(num);

    let result = [];

    result.push('+ ' + '- '.repeat(num - 2) + '+');

    for (let a = 0; a < num - 2; a++) {

        result.push('| ' + '- '.repeat(num - 2) + '|');

    }

    result.push('+ ' + '- '.repeat(num - 2) + '+');

    return result.join('\n');

}

console.log(solve(['4']));