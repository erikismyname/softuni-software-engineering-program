function solve([num, from, to]) {

    num = Number(num);

    let data = {

        'mToCm': num * 100,

        'mToMm': num * 1000,

        'cmToM': num / 100,

        'cmToMm': num * 10,

        'mmToCm': num / 10,

        'mmToM': num / 1000

    };

    return data[`${from}To${to[0].toUpperCase() + to.slice(1)}`].toFixed(3);

}

console.log(solve(['12', 'mm', 'm'])); // 0.012

console.log(solve(['150', 'm', 'cm'])); // 15000.000

console.log(solve(['45', 'cm', 'mm'])); // 450.000