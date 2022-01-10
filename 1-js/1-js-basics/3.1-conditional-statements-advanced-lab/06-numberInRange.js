function solve([num]) {

    num = Number(num);

    return num >= -100 && num <= 100 && num != 0 ? 'Yes' : 'No';

}

console.log(solve(['-25'])); // Yes

console.log(solve(['0'])); // No