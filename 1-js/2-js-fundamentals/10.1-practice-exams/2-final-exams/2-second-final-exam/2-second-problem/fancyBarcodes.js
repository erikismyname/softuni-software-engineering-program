function solve([num, ...arr]) {

    let result = [];

    arr.forEach(el => {

        let barcodeMatch = el.match(/(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z](@#+)/g);

        if (barcodeMatch) {

            let groupMatch = barcodeMatch[0].match(/\d/g);

            result.push(groupMatch ? `Product group: ${groupMatch.reduce((acc, c) => acc + c)}` : 'Product group: 00');

        } else {

            result.push('Invalid barcode');

        }

    });

    return result.join('\n');

}

console.log(solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ]));