function solve([num]) {

    num = Number(num);

    let result = [];

    for (let a = 1; a <= num; a += 3) {

        result.push(a);

    }

    return result.join('\n');

}

console.log(solve(['10']));