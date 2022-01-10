function solve(a, b, c) {

    let semiPer = (a + b + c) / 2;

    return Math.sqrt(semiPer * (semiPer - a) * (semiPer - b) * (semiPer - c));

}

console.log(solve(2, 3.5, 4)); // 3.4994419198