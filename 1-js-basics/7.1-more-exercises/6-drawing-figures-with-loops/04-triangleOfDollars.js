function solve([num]) {

    num = Number(num);

    let result = [];

    for (let a = 1; a <= num; a++) {

        for (let b = a; b <= a; b++) {

            result.push('$ '.repeat(b));

        }

    }

    return result.join('\n');

}

console.log(solve(['10']));