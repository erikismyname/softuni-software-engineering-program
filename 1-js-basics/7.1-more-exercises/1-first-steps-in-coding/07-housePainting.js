function solve([x, y, h]) {

    x = Number(x);

    y = Number(y);

    h = Number(h);

    let frontBackArea = ((x ** 2) - 1.2 * 2) + x ** 2;

    let sideArea = ((x * y) * 2) - ((1.5 ** 2) * 2);

    let totalGreen = (frontBackArea + sideArea) / 3.4;

    let roofSidesArea = (((x * y) * 2) + ((x * h / 2) * 2)) / 4.3;
    
    return `${totalGreen.toFixed(2)}\n${roofSidesArea.toFixed(2)}`;

}

console.log(solve(['6', '10', '5.2']));