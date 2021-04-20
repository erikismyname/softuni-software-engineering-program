function solve([num]) {

    num = Number(num)

    return num >= 100 && num <= 200 || num == 0 ? '' : 'invalid';

}

console.log(solve(['75'])); // invalid

console.log(solve(['150'])); // No output