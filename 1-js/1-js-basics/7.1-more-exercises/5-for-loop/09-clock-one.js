function solve() {

    let result = [];

    for (let a = 0; a <= 23; a++) {

        for (let b = 0; b <= 59; b++) {

            result.push(`${a} : ${b}`);

        }

    }

    return result.join('\n');

}

console.log(solve());