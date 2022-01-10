function solve(arr) {

    return arr.map(Number).filter(el => el % 2 == 0).reduce((acc, c) => acc + c, 0);

}

console.log(solve(['1', '2', '3', '4', '5', '6'])); // 12