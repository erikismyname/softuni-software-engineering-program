function solve([hours, minutes]) {

    hours = Number(hours);

    minutes = Number(minutes);

    if (minutes + 15 >= 60) {

        hours++;

        if (hours > 23) {

            hours = 0;

        }

        minutes = (minutes + 15) - 60;

    } else {

        minutes += 15;

    }

    return minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`;

}

console.log(solve(['1', '46'])); // 2:01

console.log(solve(['0', '01'])); // 0:16

console.log(solve(['23', '59'])); // 0:14