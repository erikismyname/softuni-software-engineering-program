function solve([degrees, time]) {

    degrees = Number(degrees);

    let outfit = '';

    let shoes = '';

    if (degrees >= 10 && degrees <= 18) {

        if (time == 'Morning') {

            outfit = 'Sweatshirt';

            shoes = 'Sneakers';

        } else {

            outfit = 'Shirt';

            shoes = 'Moccasins';

        }

    } else if (degrees > 18 && degrees <= 24) {

        if (time == 'Morning' || time == 'Evening') {

            outfit = 'Shirt';

            shoes = 'Moccasins';

        } else if (time == 'Afternoon') {

            outfit = 'T-Shirt';

            shoes = 'Sandals';

        }

    } else {

        if (time == 'Morning') {

            outfit = 'T-Shirt';

            shoes = 'Sandals';
            
        } else if (time == 'Afternoon') {

            outfit = 'Swim Suit';

            shoes = 'Barefoot';

        } else {

            outfit = 'Shirt';

            shoes = 'Moccasins';

        }

    }

    return `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;

}

console.log(solve(['16', 'Morning']));
console.log(solve(['22', 'Afternoon']));
console.log(solve(['28', 'Evening']));