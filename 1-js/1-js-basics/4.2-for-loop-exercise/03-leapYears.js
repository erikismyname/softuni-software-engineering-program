function solve([leapYear, year]) {

    leapYear = Number(leapYear);

    year = Number(year);

    let result = [];

    for (let a = leapYear; a <= year; a += 4) {

        result.push(a);

    }

    return result.join('\n');

}

console.log(solve(['1908', '1919']));