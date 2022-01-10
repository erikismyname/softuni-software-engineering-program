function solve(arr) {

    let bottles = Number(arr.shift());

    let quantityMl = bottles * 750;

    let index = 0;

    let current = arr[index];

    let isEnough = false;

    let washedPots = 0;

    let washedDishes = 0;

    let counter = 0;

    while (quantityMl >= 0) {

        counter++;

        if (current == 'End') {

            isEnough = true;

            break;

        } else if (counter % 3 == 0) {

            quantityMl -= (Number(current) * 15);

            washedPots += Number(current);

        } else {

            quantityMl -= (Number(current) * 5);

            washedDishes += Number(current);

        }

        index++;

        current = arr[index];

    }

    return isEnough ? `Detergent was enough!\n${washedDishes} dishes and ${washedPots} pots were washed.\nLeftover detergent ${quantityMl} ml.` : `Not enough detergent, ${Math.abs(quantityMl)} ml. more necessary!`;

}

console.log(solve(['2', '53', '65', '55', 'End']));
console.log(solve(['1', '10', '15', '10', '12', '13', '30']));