function solve([a, b, h]) {

    a = Number(a);

    b = Number(b);

    h = Number(h);

    return ((a + b) * h / 2).toFixed(2);

}

console.log(solve(['8', '13', '7']));