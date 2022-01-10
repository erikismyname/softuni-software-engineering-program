function solve(arr) {

    let value = 0;

    let data = {

        soap: () => value += 10,

        water: () => value *= 1.20,

        'vacuum cleaner': () => value *= 1.25,

        mud: () => value *= 0.90

    };

    arr.forEach(el => {

        data[el]();

    });

    return `The car is ${value.toFixed(2)}% clean.`

}

console.log(solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])); // The car is 39.00% clean.