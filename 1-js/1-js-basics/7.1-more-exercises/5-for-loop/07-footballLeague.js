function solve(arr) {

    let capacity = Number(arr.shift());

    let fans = Number(arr.shift());

    let sectorA = 0;

    let sectorB = 0;

    let sectorV = 0;

    let sectorG = 0;

    for (let a = 0; a < arr.length; a++) {

        let current = arr[a];

        if (current == 'A') {

            sectorA++;

        } else if (current == 'B') {

            sectorB++;

        } else if (current == 'V') {

            sectorV++;

        } else {

            sectorG++;

        }

    }

    return `${((sectorA / fans) * 100).toFixed(2)}%\n${((sectorB / fans) * 100).toFixed(2)}%\n${((sectorV / fans) * 100).toFixed(2)}%\n${((sectorG / fans) * 100).toFixed(2)}%\n${((fans / capacity) * 100).toFixed(2)}%`;

}

console.log(solve([
    '76', '10', 'A', 'V',
    'V', 'V', 'G', 'B',
    'A', 'V', 'B', 'B'
]));