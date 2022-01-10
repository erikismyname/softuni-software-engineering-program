function solve([type, rows, cols]) {

    rows = Number(rows);

    cols = Number(cols);

    let area = rows * cols;

    let sum = 0;

    let data = {

        'Premiere': sum = area * 12,

        'Normal': sum = area * 7.50,

        'Discount': sum = area * 5

    }

    return `${data[type].toFixed(2)} leva`;

}

console.log(solve(['Premiere', '10', '12']));