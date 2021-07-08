function solve(arr) {

    let data = {};

    arr.forEach(el => {

        let [name, price] = el.split(' : ');

        price = Number(price);

        data[name] = price;

    });

    let letters = [];

    let result = [];

    Object.entries(data).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => {

        if (!letters.includes(el[0][0])) {

            letters.push(el[0][0]);
            
            result.push(el[0][0]);

        }

        result.push(`  ${el[0]}: ${el[1]}`);

    });

    return result.join('\n');

}

console.log(solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));
/*
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/