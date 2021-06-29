function solve(x, y) {

    let calc = (num) => num >= 1 ? num * calc(num - 1) : 1;

    return (calc(x) / calc(y)).toFixed(2);

}

console.log(solve(5, 2)); // 60.00