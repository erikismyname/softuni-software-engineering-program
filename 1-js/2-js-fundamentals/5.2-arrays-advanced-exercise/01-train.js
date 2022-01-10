function solve([wagons, capacity, ...arr]) {

    wagons = wagons.split(' ').map(Number);

    arr.forEach(el => {

        el.includes('Add') ? wagons.push(Number(el.split(' ')[1])) : addPassengers(Number(el));

    });

    return wagons.join(' ');

    function addPassengers(num) {

        for (let a = 0; a < wagons.length; a++) {

            if (wagons[a] + num <= Number(capacity)) {

                wagons[a] += num;

                break;

            }

        }

    }

}

console.log(solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)); // 72 54 21 12 4 75 23 10 0