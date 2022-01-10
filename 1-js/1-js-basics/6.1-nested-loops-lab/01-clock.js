function solve() {

    let result = [];

    for (let h = 0; h <= 23; h++) {

        for (let m = 0; m <= 59; m++) {

            result.push(`${h}:${m}`);

        }

    }

    return result.join('\n');

}

console.log(solve());