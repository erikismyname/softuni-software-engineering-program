function solve([sequence, ...arr]) {

    sequence = sequence.split(' ').filter(el => el != '');

    let result = [];

    let counter = 0;

    for (let line of arr) {

        if (line == 'end') {

            break;

        }

        counter++;

        let [idxOne, idxTwo] = line.split(' ').map(Number);

        if (!validate(idxOne, idxTwo, sequence)) {

            let newEl = [`-${counter}a`, `-${counter}a`];

            sequence.splice(sequence.length / 2, 0, ...newEl);

            result.push('Invalid input! Adding additional elements to the board');

        } else {

            if (sequence[idxOne] == sequence[idxTwo]) {

                let el = sequence[idxOne];

                sequence.splice(Math.min(idxOne, idxTwo), 1);

                sequence.splice(Math.max(idxOne, idxTwo) - 1, 1);

                result.push(`Congrats! You have found matching elements - ${el}!`);

            } else {

                result.push('Try again!');

            }

        }

        if (!sequence.length) {

            result.push(`You have won in ${counter} turns!`);

            break;

        }

    }

    return sequence.length ? `${result.join('\n')}\nSorry you lose :(\n${sequence.join(' ')}` : result.join('\n');

    function validate(numOne, numTwo, arr) {

        return (numOne != numTwo) && (numOne >= 0 && numOne < arr.length) && (numTwo >= 0 && numTwo < arr.length);

    }

}

console.log(solve([
    '1 1 2 2 3 3 4 4 5 5 ',
    '1 0',
    '-1 0',
    '1 0 ',
    '1 0 ',
    '1 0 ',
    'end'
]));

console.log(solve(['a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end']));

console.log(solve(['a 2 4 a 2 4 ', '4 0 ', '0 2', '0 1', '0 1 ', 'end']));