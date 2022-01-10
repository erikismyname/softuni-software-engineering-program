function createCollection(arr) {

    const data = {};

    arr.forEach(e => {

        const [town, product, price] = e.split(' | ').map(v => isNaN(v) ? v : Number(v));

        if (!data[product]) {

            data[product] = [{ town, price }];

        } else {

            const isFound = data[product].find(e => e.town == town);

            isFound ? isFound.price = price : data[product].push({ town, price });

        }

    });

    return Object.entries(data).map(mapElements).join('\n');

    function mapElements(el) {

        el[1].sort((a, b) => a.price - b.price)[0];

        return `${el[0]} -> ${el[1][0].price} (${el[1][0].town})`;

    }

}