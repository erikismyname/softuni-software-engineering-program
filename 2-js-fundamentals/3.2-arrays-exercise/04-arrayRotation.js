function solve(arr, num) {

    for (let a = 0; a < num; a++) {

        arr.push(arr.shift());

    }

    return arr.join(' ');

}

console.log(solve([51, 47, 32, 61, 21], 2)); // 32 61 21 51 47