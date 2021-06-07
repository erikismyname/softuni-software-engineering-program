function solve(arr) {

    let neededSum = Number(arr.shift());

    let index = 0;

    let current = arr[index];

    let total = 0;

    let result = [];

    let cardCounter = 0;

    let cashCounter = 0;

    let cardSum = 0;

    let cashSum = 0;

    let type = 'cash';

    while (current != 'End') {

        current = Number(current);

        if (current <= 100 && type == 'cash') {

            cashCounter++;

            cashSum += current;

            result.push('Product sold!');

            total += current;

        } else if (current > 100 && type == 'cash') {

            result.push('Error in transaction!');

        }
        
        if (current >= 10 && type == 'card') {

            cardCounter++;

            cardSum += current;

            result.push('Product sold!');

            total += current;

        } else if (current < 10 && type == 'card') {

            result.push('Error in transaction!');

        }

        index++;

        current = arr[index];

        if (type == 'cash') {

            type = 'card';

        } else {

            type = 'cash';

        }

        if (total >= neededSum) {

            break;

        }

    }

    if (total >= neededSum) {

        result.push(`Average CS: ${(cashSum / cashCounter).toFixed(2)}`);

        result.push(`Average CC: ${(cardSum / cardCounter).toFixed(2)}`);

    } else {

        result.push('Failed to collect required money for charity.');

    }

    return result.join('\n');

}

console.log(solve(['500', '120', '8', '63', '256', '78', '317']));
console.log(solve(['600', '86', '150', '98', '227', 'End']));