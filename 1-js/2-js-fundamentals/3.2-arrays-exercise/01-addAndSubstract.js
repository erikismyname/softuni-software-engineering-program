function solve(arr) {

    let sumOld = arr.reduce((acc, c) => acc + c);

    let newArr = arr.map((el, i) => el % 2 == 0 ? el += i : el -= i);

    let sumNew = newArr.reduce((acc, c) => acc + c);

    return `[ ${newArr.join(', ')} ]\n${sumOld}\n${sumNew}`;

}

console.log(solve([5, 15, 23, 56, 35])); // [ 5, 14, 21, 59, 31 ]
// 134
// 130