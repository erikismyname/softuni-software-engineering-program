function solve(arr) {

    const result = [];

    arr.forEach(e => e < 0 ? result.unshift(e) : result.push(e));

    return result.join('\n');

}