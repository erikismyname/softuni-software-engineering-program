function solve() {

    let result = [];

    for (let a = 1; a <= 10; a++) {

        for (let b = 1; b <= 10; b++) {

            result.push(`${a} * ${b} = ${a * b}`);

        }

    }

    return result.join('\n');

}

console.log(solve());