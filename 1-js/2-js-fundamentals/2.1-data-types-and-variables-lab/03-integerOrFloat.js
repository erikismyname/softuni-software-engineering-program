function solve(a, b, c) {

    let sum = a + b + c;

    console.log(sum == Math.trunc(sum) ? `${sum} - Integer` : `${sum} - Float`); // I use 'console.log' instead of 'return' because this is what Judge expects.

}

solve(9, 100, 1.1); // 110.1 - Float

solve(100, 200, 303); // 603 - Integer