function solve(arr) {

    let [lugPr, lugKg, daysUntTrip, lugNum] = arr.filter(el => el != '').map(Number);

    if (lugKg < 10) {

        lugPr *= 0.20;

    } else if (lugKg >= 10 && lugKg <= 20) {

        lugPr /= 2;

    }

    if (daysUntTrip < 7) {

        lugPr *= 1.40;

    } else if (daysUntTrip >= 7 && daysUntTrip <= 30) {

        lugPr *= 1.15;

    } else {

        lugPr *= 1.10;

    }

    return `The total price of bags is: ${(lugPr * lugNum).toFixed(2)} lv.`;

}

console.log(solve(['30', '18', '15', '2', '']));

console.log(solve(['25.50', '5', '36', '6', '']));

console.log(solve(['63.80', '23', '3', '1', '']));

console.log(solve(['10', '21', '1', '1']));