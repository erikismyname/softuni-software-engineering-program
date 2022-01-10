function solve(arr) {

    let index = 0;

    let current = arr[index];

    let beta = [];

    let alpha = [];

    let counterC = 0;

    let counterO = 0;

    let counterN = 0;

    while (current != 'End') {

        if (current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90 || current.charCodeAt(0) >= 97 && current.charCodeAt(0) <= 122) {

            if (current == 'c') {

                counterC++;

                if (counterC > 1) {

                    beta.push(current);

                }

            } else if (current == 'o') {

                counterO++;

                if (counterO > 1) {

                    beta.push(current);

                }

            } else if (current == 'n') {

                counterN++;

                if (counterN > 1) {

                    beta.push(current);

                }

            } else {

                beta.push(current);

            }

            if (counterC >= 1 && counterO >= 1 && counterN >= 1) {

                beta.push(' ');

                alpha.push(beta.join(''));

                beta = [];

                counterC = 0;

                counterO = 0;

                counterN = 0;

            }

        }

        index++;

        current = arr[index];

    }

    return alpha.join('');

}

console.log(solve([
    'o', 'S', '%', 'o',
    'l', '^', 'v', 'e',
    'c', 'n', '&', 'm',
    'e', 'c', 'o', 'n',
    'End'
]));