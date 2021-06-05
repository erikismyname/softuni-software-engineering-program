function solve([season, group, studentsNum, nightsNum]) {

    studentsNum = Number(studentsNum);

    nightsNum = Number(nightsNum);

    let sport = '';

    let price = 0;

    if (season == 'Winter') {

        if (group == 'girls' || group == 'boys') {

            price = (studentsNum * 9.60) * nightsNum;

            if (group == 'girls') {

                sport = 'Gymnastics';

            } else {

                sport = 'Judo';

            }

        } else {

            price = (studentsNum * 10) * nightsNum;

            sport = 'Ski';

        }

    } else if (season == 'Spring') {

        if (group == 'girls' || group == 'boys') {

            price = (studentsNum * 7.20) * nightsNum;

            if (group == 'girls') {

                sport = 'Athletics';

            } else {

                sport = 'Tennis';

            }

        } else {

            price = (studentsNum * 9.50) * nightsNum;

            sport = 'Cycling';

        }

    } else {

        if (group == 'girls' || group == 'boys') {

            price = (studentsNum * 15) * nightsNum;

            if (group == 'girls') {

                sport = 'Volleyball';

            } else {

                sport = 'Football';

            }

        } else {

            price = (studentsNum * 20) * nightsNum;

            sport = 'Swimming';

        }

    }

    if (studentsNum >= 50) {

        price *= 0.50;

    } else if (studentsNum >= 20 && studentsNum < 50) {

        price *= 0.85;

    } else if (studentsNum >= 10 && studentsNum < 20) {

        price *= 0.95;

    }

    return `${sport} ${price.toFixed(2)} lv.`;

}

console.log(solve(['Spring', 'girls', '20', '7']));
console.log(solve(['Winter', 'mixed', '9', '15']));
console.log(solve(['Summer', 'boys', '60', '7']));
console.log(solve(['Spring', 'mixed', '17', '14']));