function withAnArrayLiteral() {

    return [1, 2, 3, 4, 5].join('\n');

}

console.log(withAnArrayLiteral()); // 1
// ...
// 5

function withAForLoop() {

    let result = [];

    for (let a = 1; a <= 5; a++) {

        result.push(a);

    }

    return result.join('\n');

}

console.log(withAForLoop()); // Same result as above.

function withAWhileLoop() {

    let result = [];

    let num = 1;

    while (num <= 5) {

        result.push(num);

        num++;

    }

    return result.join('\n');

}

console.log(withAWhileLoop()); // Same result as above