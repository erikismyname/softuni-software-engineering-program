function solve([num]) {

    num = Number(num);

    let row = '*'.repeat(num);

    let result = [];

    for (let a = 0; a < num; a++) {

        result.push(row);

    }

    return result.join('\n');

}

console.log(solve(['3']));