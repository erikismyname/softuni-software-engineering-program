function createCatalogue(arr) {

    const products = {};

    arr.map(e => e.split(' : ')).forEach(([p, v]) => products[p] = Number(v));

    const result = [];

    Object.entries(products).sort((a, b) => a[0].localeCompare(b[0])).forEach(e => {

        const firstLetter = e[0][0];

        if (!result.includes(firstLetter)) {

            result.push(firstLetter);

        }

        result.push(`  ${e[0]}: ${e[1]}`);

    });

    return result.join('\n');

}