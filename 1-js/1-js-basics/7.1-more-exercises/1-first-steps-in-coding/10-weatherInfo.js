function solve([degrees]) {

    degrees = Number(degrees);

    if (degrees >= 5 && degrees <= 11.9) {

        return 'Cold';

    } else if (degrees > 11.9 && degrees <= 14.9) {

        return 'Cool';

    } else if (degrees > 14.9 && degrees <= 20) {

        return 'Mild';

    } else if (degrees > 20 && degrees <= 25.9) {

        return 'Warm';

    } else if (degrees > 25.9 && degrees <= 35) {

        return 'Hot';

    } else {

        return 'unknown';

    }
    
}

console.log(solve(['16.5']));