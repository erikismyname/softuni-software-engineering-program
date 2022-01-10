function solve([num]) {

    num = Number(num);

    let result = [];

    let row = '* '.repeat(num);

    for (let a = 0; a < num; a++) {

        result.push(row);

    }

    return result.join('\n');

}

console.log(solve(['2']));