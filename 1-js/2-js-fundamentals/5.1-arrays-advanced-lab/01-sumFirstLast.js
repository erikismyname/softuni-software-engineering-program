function solve(arr) {

    return Number(arr[0]) + Number(arr[arr.length - 1]);

    // return arr.map(Number).filter((el, i, arr) => i == 0 || i == arr.length - 1).reduce((acc, c) => acc + c);

}

console.log(solve(['20', '30', '40'])); // 60