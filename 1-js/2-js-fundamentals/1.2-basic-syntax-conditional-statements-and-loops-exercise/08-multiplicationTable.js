function solve(num) {

    let result = [];

    for (let a = 1; a <= 10; a++) {

        result.push(`${num} X ${a} = ${num * a}`);

    }

    return result.join('\n');

}

console.log(solve(5)); // 5 X 1 = 5
// ...
// 5 X 10 = 50