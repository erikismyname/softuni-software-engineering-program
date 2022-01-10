function withAForLoop() {

    let result = [];

    for (let a = 1; a <= 100; a++) {

        if (a % 3 == 0) {

            result.push(a);

        }

    }

    return result.join('\n');

}

console.log(withAForLoop()); // 3
// 6
// ...

function withAWhileLoop() {

    let result = [];

    let num = 1;

    while (num <= 100) {

        if (num % 3 == 0) {

            result.push(num);

        }

        num++;

    }

    return result.join('\n');

}

console.log(withAWhileLoop()); // Same result as above.