function solve([people, wagons]) {

    people = Number(people);

    wagons = wagons.split(' ').map(Number);

    let idx = 0;

    while (wagons.some(el => el != 4) && people != 0) {

        while (wagons[idx] < 4) {

            people--;

            wagons[idx]++;

            if (people == 0) {

                break;

            }

        }

        idx++;

    }

    let message = '';

    if (wagons.some(el => el != 4)) {

        message = 'The lift has empty spots!';

    } else if (people > 0) {

        message = `There isn't enough space! ${people} people in a queue!`;

    }

    return message.length ? `${message}\n${wagons.join(' ')}` : wagons.join(' ');

}

console.log(solve(['15', '0 0 0 0']));

console.log(solve(['20', '0 2 0']));