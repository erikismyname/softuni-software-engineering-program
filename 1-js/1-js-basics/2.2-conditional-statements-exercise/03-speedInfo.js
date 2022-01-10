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

console.log(solve(['8'])); // slow

console.log(solve(['49.5'])); // average

console.log(solve(['126'])); // fast

console.log(solve(['160'])); // ultra fast

console.log(solve(['3500'])); // extremely fast