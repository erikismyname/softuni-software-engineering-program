function solve([num]) {

    num = Number(num);

    let result = [];

    for (let a = 0; a <= num; a += 2) {

        result.push(Math.pow(2, a));

    }

    return result.join('\n');

}

console.log(solve(['3']));