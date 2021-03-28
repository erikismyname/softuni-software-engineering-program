function solve([num]) {

    num = Number(num);

    let bonusPoints = 0;

    if (num <= 100) {

        bonusPoints += 5;

    } else if (num > 100 && num <= 1000) {

        bonusPoints += (num * 0.20);

    } else {

        bonusPoints += (num * 0.10);

    }

    if (num % 2 == 0) {

        bonusPoints++;

    }

    if (num % 10 == 5) {

        bonusPoints += 2;

    }

    return `${bonusPoints}\n${num + bonusPoints}`;

}