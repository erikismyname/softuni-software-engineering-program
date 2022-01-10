function getCarsInfo(arr) {

    const carsDatabase = {};

    arr.forEach(e => {

        const [carBrand, carModel, producedCars] = e.split(' | ').map(e => !isNaN(e) ? Number(e) : e);

        if (!carsDatabase[carBrand]) {

            carsDatabase[carBrand] = {};

        }

        if (!carsDatabase[carBrand][carModel]) {

            carsDatabase[carBrand][carModel] = 0;

        }

        carsDatabase[carBrand][carModel] += producedCars;

    });

    return getResult(carsDatabase);

    function getResult(obj) {

        const result = [];

        Object.entries(obj).forEach(e => {

            result.push(e[0]);

            Object.entries(e[1]).forEach(e => {

                result.push(`###${e[0]} -> ${e[1]}`);

            });

        });

        return result.join('\n');

    }

}

console.log(getCarsInfo(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));