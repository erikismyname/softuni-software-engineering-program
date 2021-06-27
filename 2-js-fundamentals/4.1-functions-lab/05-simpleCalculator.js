function solve(a, b, operator) {

    let data = {

        multiply: a * b,

        divide: a / b,

        add: a + b,

        subtract: a - b

    };

    return data[operator];

}

console.log(solve(5, 5, 'multiply')); // 25