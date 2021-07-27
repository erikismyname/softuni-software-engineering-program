function solve(speed, area) {

    const data = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    return speed <= data[area] ? `Driving ${speed} km/h in a ${data[area]} zone` : `The speed is ${getInfo(speed)[0]} km/h faster than the allowed speed of ${data[area]} - ${getInfo(speed)[1]}`;

    function getInfo(speed) {

        let status = '';

        const diff = speed - data[area];

        if (diff <= 20) {

            status = 'speeding';

        } else if (diff <= 40) {

            status = 'excessive speeding';

        } else {

            status = 'reckless driving';

        }

        return [diff, status];

    }

}