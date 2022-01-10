function solve(arr) {

    let [days, food, ...values] = arr.map(Number);

    let totalDog = 0;

    let totalCat = 0;

    let biscuits = 0;

    let counter = 0;

    for (let a = 0; a < values.length; a += 2) {

        counter++

        totalDog += values[a];

        totalCat += values[a + 1];

        if (counter % 3 == 0) {

            biscuits += ((values[a] + values[a + 1]) * 0.10);

        }

        if (counter == days) {

            break;

        }

    }

    let total = totalDog + totalCat;

    return `Total eaten biscuits: ${Math.round(biscuits)}gr.\n${((total / food) * 100).toFixed(2)}% of the food has been eaten.\n${((totalDog / total) * 100).toFixed(2)}% eaten from the dog.\n${((totalCat / total) * 100).toFixed(2)}% eaten from the cat.`;

}

console.log(solve([
    '3', '1000',
    '300', '20',
    '100', '30',
    '110', '40'
]));

console.log(solve([
    '3', '500',
    '100', '30',
    '110', '25',
    '120', '35'
]));