function solve(arr) {

    return [...new Set(arr)].join(' ');

}

console.log(solve([1, 2, 3, 4])); // 1 2 3 4

console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2])); // 7 8 9 2 3 4 1