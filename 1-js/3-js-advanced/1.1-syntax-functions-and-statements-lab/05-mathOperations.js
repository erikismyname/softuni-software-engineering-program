function solve(a, b, operator) {

    const operations = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b,
        '%': a % b,
        '**': a ** b
    };

    return operations[operator];

}

console.log(solve(5, 6, '+'));
console.log(solve(3, 5.5, '*'));