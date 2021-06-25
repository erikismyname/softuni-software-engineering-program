function solve(arr) {

    let rotations = Number(arr.pop());

    for (let a = 0; a < rotations; a++) {

        arr.unshift(arr.pop());

    }

    return arr.join(' ');

}

console.log(solve(['1', '2', '3', '4', '2'])); // 3 4 1 2