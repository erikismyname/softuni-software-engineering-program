function solve([type, a, b]) {

    a = Number(a);

    b = Number(b);

    let data = {

        square: a ** 2,

        rectangle: a * b,

        circle: Math.PI * (a ** 2),

        triangle: (a * b) / 2

    };

    return data[type].toFixed(3);

}

console.log(solve(['square', '5'])); // 25.000

console.log(solve(['rectangle', '7', '2.5'])); // 17.500

console.log(solve(['circle', '6'])); // 113.097

console.log(solve(['triangle', '4.5', '20'])); // 45.000