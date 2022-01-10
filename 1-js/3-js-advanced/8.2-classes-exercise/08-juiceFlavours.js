function getBottlesData(arr) {

    const bottles = new Map();

    const storage = {};

    arr.forEach(e => {

        const [name, qty] = e.split(' => ').map(e => !isNaN(e) ? Number(e) : e);

        if (!storage[name]) {

            storage[name] = 0;

        }

        storage[name] += qty;

        if (storage[name] >= 1000) {

            let numOfBottles = Math.trunc(storage[name] / 1000);

            storage[name] -= numOfBottles * 1000;

            if (!bottles.has(name)) {

                bottles.set(name, 0);

            }

            bottles.set(name, bottles.get(name) + numOfBottles);

        }

    });

    return Array.from(bottles.entries()).map(e => `${e[0]} => ${e[1]}`).join('\n');

}