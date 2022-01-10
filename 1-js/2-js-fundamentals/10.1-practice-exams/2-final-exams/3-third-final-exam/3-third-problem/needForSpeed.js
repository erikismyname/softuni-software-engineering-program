function solve([n, ...arr]) {

    n = Number(n);

    let result = [];

    let data = {};

    let actions = {

        drive: ([car, ...values]) => {

            let [dist, fuel] = values.map(Number);

            if (data[car].fuel < fuel) {

                result.push('Not enough fuel to make that ride');

                return;

            }

            result.push(`${car} driven for ${dist} kilometers. ${fuel} liters of fuel consumed.`);

            data[car].mil += dist;

            data[car].fuel -= fuel;

            if (data[car].mil >= 100000) {

                delete data[car];

                result.push(`Time to sell the ${car}!`);

            }

        },

        refuel: ([car, fuel]) => {

            fuel = Number(fuel);

            data[car].fuel + fuel > 75 ? `${result.push(`${car} refueled with ${75 - data[car].fuel} liters`)} ${data[car].fuel = 75}` : `${result.push(`${car} refueled with ${fuel} liters`)} ${data[car].fuel += fuel}`;

        },

        revert: ([car, kil]) => {

            kil = Number(kil);

            data[car].mil -= kil;

            data[car].mil >= 10000 ? result.push(`${car} mileage decreased by ${kil} kilometers`) : data[car].mil = 10000;

        }

    };

    arr.slice(0, n).forEach(el => {

        let [car, ...values] = el.split('|');

        let [mil, fuel] = values.map(Number);

        data[car] = { mil, fuel };

    });

    arr.slice(n, -1).forEach(el => {

        let [command, ...values] = el.split(' : ');

        actions[command.toLowerCase()](values);

    });

    Object.entries(data).sort((a, b) => b[1].mil - a[1].mil || a[0].localeCompare(b[0])).map(el => `${el[0]} -> Mileage: ${el[1].mil} kms, Fuel in the tank: ${el[1].fuel} lt.`).forEach(el => result.push(el));

    return result.join('\n');

}

// console.log(solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]
// ));

console.log(solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  ));