function solve([num]) {

    num = Number(num);

    let result = [];

    for (let a = 1; a <= 10; a++) {

        result.push(`${a} * ${num} = ${a * num}`);

    }

    return result.join('\n');

}

console.log(solve(['5']));