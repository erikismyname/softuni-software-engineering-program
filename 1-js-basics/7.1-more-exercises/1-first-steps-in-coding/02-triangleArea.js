function solve([a, h]) {

    a = Number(a);

    h = Number(h);

    return (a * h / 2).toFixed(2);

}

console.log(solve(['7.75', '8.45']));