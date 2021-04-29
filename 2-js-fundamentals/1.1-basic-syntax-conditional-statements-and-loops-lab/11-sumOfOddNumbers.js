function withAForLoop(n) {

    let result = [];

    let sum = 0;

    for (let a = 1, counter = 0; counter < n; a += 2, counter++) {

        result.push(a);

        sum += a;

    }

    return `${result.join('\n')}\nSum: ${sum}`;

}

console.log(withAForLoop(3)); // 1
// 3
// 5
// Sum: 9

function withAWhileLoop(n) {

    let result = [];

    let sum = 0;

    let counter = 0;

    let num = 1;

    while (counter < n) {

        if (num % 2 != 0) {

            result.push(num);

            sum += num;

            counter++;

        }

        num++;

    }

    return `${result.join('\n')}\nSum: ${sum}`;

}

console.log(withAWhileLoop(3)); // Same result as above.