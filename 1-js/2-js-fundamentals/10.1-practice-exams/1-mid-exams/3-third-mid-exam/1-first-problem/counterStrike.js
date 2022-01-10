function solve([energy, ...arr]) {

    energy = Number(energy);

    arr = arr.map(el => !isNaN(el) ? Number(el) : el);

    let counter = 0;

    for (let line of arr) {

        if (line == 'End of battle') {

            return `Won battles: ${counter}. Energy left: ${energy}`;

        }

        if (energy - line < 0) {

            return `Not enough energy! Game ends with ${counter} won battles and ${energy} energy`;

        }

        energy -= line;

        counter++;

        if (counter % 3 == 0) {

            energy += counter;

        }

    }

}

console.log(solve(['200', '54', '14', '28', '13', 'End of battle']));

console.log(solve([
    '100', '10', '10',
    '10', '1', '2',
    '3', '73', '10'
]));