function solve([winNum, winType, delType]) {

    winNum = Number(winNum);

    let data = {

        '90X130': 110,

        '100X150': 140,

        '130X180': 190,

        '200X300': 250

    };

    let sum = data[winType] * winNum;

    if (winNum < 10) {

        return 'Invalid order';

    }

    if (winType == '90X130') {

        if (winNum > 30 && winNum <= 60) {

            sum *= 0.95;

        } else if (winNum > 60) {

            sum *= 0.92;

        }

    } else if (winType == '100X150') {

        if (winNum > 40 && winNum <= 80) {

            sum *= 0.94;

        } else if (winNum > 80) {

            sum *= 0.90;

        }

    } else if (winType == '130X180') {

        if (winNum > 20 && winNum <= 49) {

            sum *= 0.93;

        } else if (winNum > 50) {

            sum *= 0.88;

        }

    } else {

        if (winNum > 25 && winNum <= 49) {

            sum *= 0.91;

        } else if (winNum > 50) {

            sum *= 0.86;

        }

    }

    if (delType == 'With delivery') {

        sum += 60;

    }

    if (winNum > 99) {

        sum *= 0.96;

    }

    return `${sum.toFixed(2)} BGN`;

}

console.log(solve(['40', '90X130', 'Without delivery']));

console.log(solve(['105', '100X150', 'With delivery']));

console.log(solve(['2', '130X180', 'With delivery']));