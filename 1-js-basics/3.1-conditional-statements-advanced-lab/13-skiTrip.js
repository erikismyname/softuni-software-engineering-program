function solve([days, roomType, opinion]) {

    days = Number(days);

    let nights = days - 1;

    let sum = nights * 18;

    if (roomType == 'apartment') {

        if (days < 10) {

            sum = (nights * 25) * 0.70;

        } else if (days >= 10 && days <= 15) {

            sum = (nights * 25) * 0.65;

        } else {

            sum = (nights * 25) * 0.50;

        }

    } else if (roomType == 'president apartment') {

        if (days < 10) {

            sum = (nights * 35) * 0.90;

        } else if (days >= 10 && days <= 15) {

            sum = (nights * 35) * 0.85;

        } else {

            sum = (nights * 35) * 0.80;

        }

    }

    sum = opinion == 'positive' ? sum * 1.25 : sum * 0.90;

    return sum.toFixed(2);

}

console.log(solve(['14', 'apartment', 'positive']));
// 264.06

console.log(solve(['30', 'president apartment', 'negative'])); // 730.80