function solve() {

    let result = [];

    let row = '*'.repeat(10);

    for (let a = 0; a < 10; a++) {

        result.push(row);

    }

    return result.join('\n');

}

console.log(solve());