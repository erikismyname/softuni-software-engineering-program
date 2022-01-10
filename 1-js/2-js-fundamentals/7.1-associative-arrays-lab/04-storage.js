function solve(arr) {

    let data = {};

    arr.forEach(el => {

        let [name, quantity] = el.split(' ');

        if (!data[name]) {

            data[name] = 0;

        }

        data[name] += Number(quantity);

    });

    return Object.entries(data).map(el => `${el[0]} -> ${el[1]}`).join('\n');

}

console.log(solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
));
/*
tomatoes -> 10
coffee -> 45
olives -> 100
*/