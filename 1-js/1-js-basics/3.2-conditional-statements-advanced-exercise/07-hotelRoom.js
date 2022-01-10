function solve([month, nights]) {

    nights = Number(nights);

    let apartment = 0;

    let studio = 0;

    if (month == 'May' || month == 'October') {

        if (nights > 7 && nights <= 14) {

            studio = (50 * nights) * 0.95;

            apartment = 65 * nights;

        } else if (nights > 14) {

            studio = (50 * nights) * 0.70;

            apartment = (65 * nights) * 0.90;

        } else {

            studio = 50 * nights;

            apartment = 65 * nights;
        }

    } else if (month == 'June' || month == 'September') {

        if (nights > 14) {

            studio = (75.20 * nights) * 0.80;

            apartment = (68.70 * nights) * 0.90;

        } else {

            studio = 75.20 * nights;

            apartment = 68.70 * nights;

        }

    } else {

        if (nights > 14) {

            apartment = (77 * nights) * 0.90;

        } else {

            apartment = 77 * nights;
            
        }

        studio = 76 * nights;

    }

    return `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`;

}

console.log(solve(['May', '15']));
console.log(solve(['June', '14']));
console.log(solve(['August', '20']));