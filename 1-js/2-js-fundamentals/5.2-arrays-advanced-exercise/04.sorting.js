function solve(arr) {

    let result = [];

    while (arr.sort((a, b) => a - b).length) {

        result.push(arr.pop());

        result.push(arr.shift());

    }

    console.log(result.join(' ')); // Here I use 'console.log' instead of 'return' because Judge only accepts the former.

}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); // 94 1 69 2 63 3 52 18 31 21