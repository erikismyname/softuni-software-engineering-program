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