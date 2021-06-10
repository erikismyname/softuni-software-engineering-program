function solve() {

    let result = [];

    for (let a = 0; a <= 23; a++) {

        for (let b = 0; b <= 59; b++) {

            for (let c = 0; c <= 59; c++) {

                result.push(`${a} : ${b} : ${c}`);

            }

        }

    }

    return result.join('\n');

}

console.log(solve());