function solve([num]) {

    let sum = 0;

    for (let a = 0; a < num.length; a++) {

        let current = Number(num[a]);

        sum += current;

    }

    return `The sum of the digits is:${sum}`;

}

console.log(solve(['1234']));