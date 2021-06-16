function solve(num) {

    let result = [];

    for (let a = 0; a < num; a++) {

        for (let b = 0; b < num; b++) {

            for (let c = 0; c < num; c++) {

                result.push(String.fromCharCode(97 + a, 97 + b, 97 + c));

            }

        }

    }

    return result.join('\n');

}

console.log(solve(3)); // aaa
// aab
// aac
// ...