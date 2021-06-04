function solve([young, old, type]) {

    young = Number(young);

    old = Number(old);

    let sum = 0;

    if (type == 'trail') {

        sum = ((young * 5.50) + (old * 7)) * 0.95;

    } else if (type == 'cross-country') {

        if (young + old >= 50) {

            sum = (((young * 8) + (old * 9.50)) * 0.75) * 0.95;

        } else {

            sum = ((young * 8) + (old * 9.50)) * 0.95;

        }

    } else if (type == 'downhill') {

        sum = ((young * 12.25) + (old * 13.75)) * 0.95;

    } else {

        sum = ((young * 20) + (old * 21.50)) * 0.95;

    }

    return sum.toFixed(2);

}

console.log(solve(['10', '20', 'trail']));
console.log(solve(['20', '25', 'cross-country']));
console.log(solve(['30', '25', 'cross-country']));
console.log(solve(['10', '10', 'downhill']));
console.log(solve(['3', '40', 'road']));