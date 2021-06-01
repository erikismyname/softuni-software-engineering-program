function solve([r]) {

    r = Number(r);

    let area = Math.PI * (r ** 2);

    let perimeter = 2 * Math.PI * r;

    return `${area.toFixed(2)}\n${perimeter.toFixed(2)}`;

}

console.log(solve(['3']));