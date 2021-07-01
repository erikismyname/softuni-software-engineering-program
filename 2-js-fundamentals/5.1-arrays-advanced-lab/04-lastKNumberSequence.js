function solve(n, k) {

    let result = [1];

    for (let a = 1; a < n; a++) {

        result.push(result.slice(-k).reduce((acc, c) => acc + c));

    }

    return result.join(' ');

}

console.log(solve(6, 3)); // 1 1 2 4 7 13