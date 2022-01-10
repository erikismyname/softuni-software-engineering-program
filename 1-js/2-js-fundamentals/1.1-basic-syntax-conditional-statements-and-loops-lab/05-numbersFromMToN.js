function withAForLoop(numOne, numTwo) {

    let result = [];

    for (let a = numOne; a >= numTwo; a--) {

        result.push(a);

    }

    return result.join('\n');

}

console.log(withAForLoop(6, 2)); // 6
// ...
// 2

function withAWhileLoop(numOne, numTwo) {

    let result = [];

    while (numOne >= numTwo) {

        result.push(numOne);

        numOne--;

    }

    return result.join('\n');

}

console.log(withAWhileLoop(6, 2)); // Same result as above.