function solve(arr) {

    let evenSum = arr.filter(el => el % 2 == 0).reduce((acc, c) => acc + c, 0);

    let oddSum = arr.filter(el => el % 2 != 0).reduce((acc, c) => acc + c, 0);

    return evenSum - oddSum;
    
}

console.log(solve([1, 2, 3, 4, 5, 6])); // 3