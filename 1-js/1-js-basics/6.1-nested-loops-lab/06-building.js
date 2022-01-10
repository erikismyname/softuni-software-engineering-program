function solve([floors, rooms]) {

    floors = Number(floors);

    rooms = Number(rooms);

    let row = '';

    let result = [];

    let isFirst = true;

    for (let a = floors; a >= 1; a--) {

        for (let b = 0; b < rooms; b++) {

            if (isFirst) {

                row += `L${a}${b} `;

            } else if (a % 2 == 0) {

                row += `O${a}${b} `;

            } else {

                row += `A${a}${b} `;

            }

        }

        result.push(row);

        isFirst = false;

        row = '';

    }

    return result.join('\n');

}

console.log(solve(['4', '4']));