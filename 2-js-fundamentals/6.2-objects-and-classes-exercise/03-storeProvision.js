function solve(stockArr, productsArr) {

    let data = {};

    for (let a = 0; a < stockArr.length; a += 2) {

        data[stockArr[a]] = Number(stockArr[a + 1]);

    }

    for (let a = 0; a < productsArr.length; a += 2) {

        data[productsArr[a]] ? data[productsArr[a]] += Number(productsArr[a + 1]) : data[productsArr[a]] = Number(productsArr[a + 1]);

    }

    return Object.entries(data).map(el => `${el[0]} -> ${el[1]}`).join('\n');

}

console.log(solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
));
/*
Chips -> 5
CocaCola -> 9
Bananas -> 44
Pasta -> 11
Beer -> 2
Flour -> 44
Oil -> 12
Tomatoes -> 70
*/