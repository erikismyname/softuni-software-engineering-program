function solve([km, timeOfDay]) {

    km = Number(km);

    if (km < 20) {

        if (timeOfDay == 'day') {

            return (0.70 + (0.79 * km)).toFixed(2);

        } else {

            return (0.70 + (0.90 * km)).toFixed(2);
        }

    } else if (km >= 20 && km < 100) {

        return (0.09 * km).toFixed(2);

    } else {

        return (0.06 * km).toFixed(2);

    }

}

console.log(solve(['7', 'night']));
console.log(solve(['25', 'day']));
console.log(solve(['180', 'night']));