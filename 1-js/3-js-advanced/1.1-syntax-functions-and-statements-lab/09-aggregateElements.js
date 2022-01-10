function solve(arr) {

    const result = arr.reduce((acc, c) => acc + c);

    const resultInv = arr.reduce((acc, c) => acc + 1 / c, 0);

    const resultConcat = arr.reduce((acc, c) => acc + c.toString(), '');

    return `${result}\n${resultInv}\n${resultConcat}`;

}