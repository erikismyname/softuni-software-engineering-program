function solve([type, a, b]) {

    a = Number(a);

    b = Number(b);

    let area = {

        'square': a ** 2,

        'rectangle': a * b,

        'circle': Math.PI * (a ** 2),

        'triangle': (a * b) / 2

    }

    return area[type].toFixed(3);

}