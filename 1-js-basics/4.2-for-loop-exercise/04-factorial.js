function solve([num]) {

    num = Number(num);

    let sum = 1;

    for (let a = 1; a <= num; a++) {

        sum *= a;

    }

    return sum;

}

console.log(solve(['4']));