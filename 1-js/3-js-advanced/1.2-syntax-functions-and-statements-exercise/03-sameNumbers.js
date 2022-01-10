function solve(ipt) {

    ipt = [...ipt.toString()];

    const areEqual = ipt.every((e, i, arr) => e == arr[0]);

    const sum = ipt.map(Number).reduce((acc, c) => acc + c);

    return `${areEqual}\n${sum}`;

}