function solve() {

    let index = 1;

    let result = [];

    while (index <= 100) {

        if (index % 3 == 0) {

            result.push(index);

        }

        index++;

    }

    return result.join('\n');

}

console.log(solve());