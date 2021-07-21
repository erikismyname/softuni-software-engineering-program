function solve([neighbourhood, ...arr]) {

    neighbourhood = neighbourhood.split('@').map(Number);

    let result = [];

    let currentPosIdx = 0;

    arr.filter((el, i, arr) => i != arr.length - 1).forEach(el => {

        let [command, num] = el.split(' ');

        num = Number(num);

        if (currentPosIdx + num >= neighbourhood.length) {

            currentPosIdx = 0;

            num = 0;

        }

        currentPosIdx += num;

        if (neighbourhood[currentPosIdx] == 0) {

            result.push(`Place ${currentPosIdx} already had Valentine's day.`);

        } else {

            neighbourhood[currentPosIdx] -= 2;

            if (neighbourhood[currentPosIdx] == 0) {

                result.push(`Place ${currentPosIdx} has Valentine's day.`);

            }

        }

    });

    result.push(`Cupid's last position was ${currentPosIdx}.`);

    result.push(neighbourhood.every(el => el == 0) ? 'Mission was successful.' : `Cupid has failed ${neighbourhood.filter(el => el != 0).length} places.`);

    return result.join('\n');

}

console.log(solve([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
]));