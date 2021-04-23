function forLoop(num) {

    let result = [];

    for (let a = num; a >= 1; a--) {

        result.push(a);

    }

    return result.join('\n');

}

console.log(forLoop(5)); // 5
// ...
// 1

function whileLoop(num) {

    let result = [];

    while (num >= 1) {

        result.push(num);

        num--;

    }

    return result.join('\n');

}

console.log(whileLoop(5)); // Same result as above.