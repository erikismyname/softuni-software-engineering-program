function solve(num, arr) {

    arr.length = num;

    return arr.reverse().join(' ');

}

console.log(solve(3, [10, 20, 30, 40, 50])); // 30 20 10