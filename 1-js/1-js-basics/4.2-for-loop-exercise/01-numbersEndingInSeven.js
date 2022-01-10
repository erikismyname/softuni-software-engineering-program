function solve() {

    let result = [];

    for (let a = 1; a <= 1000; a++) {

        if (a % 10 == 7) {

            result.push(a)

        }

    }

    return result.join('\n');

}

console.log(solve());