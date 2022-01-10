function solve(arr) {

    return arr.filter((el, i) => i % 2 != 0).map(el => el * 2).reverse().join(' ');

}

console.log(solve([10, 15, 20, 25])); // 50 30