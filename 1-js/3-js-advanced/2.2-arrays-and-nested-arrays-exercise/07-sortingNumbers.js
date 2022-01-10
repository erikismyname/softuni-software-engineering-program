function solve(arr) {

    arr.sort((a, b) => a - b);

    const result = [];

    while (arr.length) {

        result.push(arr.shift(), arr.pop());

    }

    return result;

}