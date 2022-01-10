function solve(a, operator, b) {

    let data = {

        '+': a + b,

        '-': a - b,

        '*': a * b,

        '/': a / b,

        '**': a ** b,

        '%': a % b

    };

    return data[operator].toFixed(2);

}

console.log(solve(5, '+', 10)); // 15.00

console.log(solve(25.5, '-', 3)); // 22.50