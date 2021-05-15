function solve([num]) {

    num = Number(num);

    let result = [];

    for (let a = num; a >= 1; a--) {

        result.push(a);

    }

    return result.join('\n');

}

console.log(solve(['2']));