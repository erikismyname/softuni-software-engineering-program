function solve(num) {

    let result = [];

    let row = `${num} `.repeat(num);

    for (let a = 0; a < num; a++) {

        result.push(row);

    }

    return result.join('\n');

}

console.log(solve(3));
// 3 3 3
// 3 3 3
// 3 3 3