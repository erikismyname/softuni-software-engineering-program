function solve(arr) {

    let loads = Number(arr.shift());

    let busTons = 0;

    let truckTons = 0;

    let trainTons = 0;

    let price = 0;

    for (let a = 0; a < arr.length; a++) {

        let current = Number(arr[a]);

        if (current <= 3) {

            busTons += current;

            price += (current * 200);

        } else if (current > 3 && current <= 11) {

            truckTons += current;

            price += (current * 175);

        } else if (current > 11) {

            trainTons += current;

            price += (current * 120);

        }

    }

    let totalTons = busTons + truckTons + trainTons;

    return `${(price / totalTons).toFixed(2)}\n${((busTons / totalTons) * 100).toFixed(2)}%\n${((truckTons / totalTons) * 100).toFixed(2)}%\n${((trainTons / totalTons) * 100).toFixed(2)}%`;

}

// console.log(solve(['4', '1', '5', '16', '3']));
console.log(solve(['5', '2', '10', '20', '1', '7']));