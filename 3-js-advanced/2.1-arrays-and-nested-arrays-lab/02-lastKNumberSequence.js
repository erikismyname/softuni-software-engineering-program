function solve(n, k) {

    const result = [1];

    for (let i = 1; i < n; i++) {

        result.push(result.slice(-k).reduce((acc, c) => acc + c, 0));

    }

    return result;

}