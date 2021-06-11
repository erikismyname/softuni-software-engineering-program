function solve([num]) {

    num = Number(num);

    let result = [];

    for (let a = 0; a <= num; a++) {

        result.push(' '.repeat(num - a) + '*'.repeat(a) + ' | ' + '*'.repeat(a));

    }

    return result.join('\n');

}

console.log(solve(['5']));