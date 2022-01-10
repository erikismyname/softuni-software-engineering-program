function composeObject(obj) {

    return {

        model: obj.model,

        engine: getEngine(obj.power),

        carriage: { type: obj.carriage, color: obj.color },

        wheels: getWheels(obj.wheelsize),

    };

    function getWheels(num) {

        const wheels = [num, num, num, num];

        return num % 2 == 0 ? wheels.map(e => e - 1) : wheels;

    }

    function getEngine(num) {

        if (num <= 90) {

            return { power: 90, volume: 1800 };

        } else if (num > 90 && num <= 120) {

            return { power: 120, volume: 2400 };

        }

        return { power: 200, volume: 3500 };

    }

}

console.log(composeObject({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(composeObject({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));