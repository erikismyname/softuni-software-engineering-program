function solve([n, ...arr]) {

    n = Number(n);

    let totalP = 0;

    let redP = 0;

    let orangeP = 0;

    let yellowP = 0;

    let whiteP = 0;

    let otherP = 0;

    let divCounter = 0;

    let data = {

        red: () => {

            totalP += 5;

            redP++;

        },

        orange: () => {

            totalP += 10;

            orangeP++;

        },

        yellow: () => {

            totalP += 15;

            yellowP++;

        },

        white: () => {

            totalP += 20;

            whiteP++;

        },

        black: () => {

            totalP /= 2;

            divCounter++;

        }

    };

    for (let a = 0; a < n; a++) {

        data[arr[a]] ? data[arr[a]]() : otherP++;

    }

    return `Total points: ${Math.floor(totalP)}\nPoints from red balls: ${redP}\nPoints from orange balls: ${orangeP}\nPoints from yellow balls: ${yellowP}\nPoints from white balls: ${whiteP}\nOther colors picked: ${otherP}\nDivides from black balls: ${divCounter}`;

}

console.log(solve(['3', 'white', 'black', 'pink']));

console.log(solve(['5', 'red', 'red', 'ddd', 'ddd', 'ddd']));

console.log(solve([
    '10', 'white',
    'white', 'ee',
    'red', 'orange',
    'red', 'black',
    'black', 'black',
    'black'
]));