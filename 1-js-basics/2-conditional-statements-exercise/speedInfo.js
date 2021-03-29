function solve([speed]) {

    speed = Number(speed);

    if (speed <= 10) {

        return 'slow';

    } else if (speed > 10 && speed <= 50) {

        return 'average';

    } else if (speed > 50 && speed <= 150) {

        return 'fast';

    } else if (speed > 150 && speed <= 1000) {

        return 'ultra fast';

    }

    return 'extremely fast';



}