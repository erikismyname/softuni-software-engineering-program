function solve(a, b, c) {

    let plus = (a, b) => a + b;

    let minus = (a, b) => a - b;

    return minus(plus(a, b), c);

}

console.log(solve(23, 6, 10)); // 19