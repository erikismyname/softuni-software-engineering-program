function solve([fuelType, fuelQuantity, card]) {

    fuelQuantity = Number(fuelQuantity);

    let sum = 0;

    if (fuelType == 'Gas') {

        sum = fuelQuantity * 0.93;

        if (card == 'Yes') {

            sum = (0.93 - 0.08) * fuelQuantity;

        }

        if (fuelQuantity >= 20 && fuelQuantity <= 25) {

            sum *= 0.92;

        } else if (fuelQuantity > 25) {

            sum *= 0.90;

        }

    } else if (fuelType == 'Diesel') {

        sum = 2.33 * fuelQuantity;

        if (card == 'Yes') {

            sum = (2.33 - 0.12) * fuelQuantity;

        }

        if (fuelQuantity >= 20 && fuelQuantity <= 25) {

            sum *= 0.92;

        } else if (fuelQuantity > 25) {

            sum *= 0.90;

        }

    } else {

        sum = 2.22 * fuelQuantity;

        if (card == 'Yes') {

            sum = (2.22 - 0.18) * fuelQuantity;

        }

        if (fuelQuantity >= 20 && fuelQuantity <= 25) {

            sum *= 0.92;

        } else if (fuelQuantity > 25) {

            sum *= 0.90;

        }

    }

    return `${sum.toFixed(2)} lv.`;

}

console.log(solve(['Gas', '30', 'Yes']));
console.log(solve(['Gasoline', '25', 'No']));
console.log(solve(['Diesel', '19', 'No']));