function solve(arr) {

    let data = {};

    let result = [];

    arr.forEach(el => {

        let [country, town, price] = el.split(' > ');

        if (!data[country]) {

            data[country] = [{ town, price }];

        }

        let current = data[country].find(el => el.town == town);

        if (!current) {

            data[country].push({ town, price });

        } else if (current && current.price > price) {

            current.price = price;

        } 

    });

    Object.entries(data).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => {

        let destinations = [];

        el[1].sort((a, b) => a.price - b.price).forEach(el => {

            destinations.push(`${el.town} -> ${el.price}`);

        });

        result.push(`${el[0]} -> ${destinations.join(' ')}`);

    });

    return result.join('\n');

}

console.log(solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
));
/*
Albania -> Tirana -> 1000
Bulgaria -> Sofia -> 200 Sopot -> 800
France -> Paris -> 2000
*/