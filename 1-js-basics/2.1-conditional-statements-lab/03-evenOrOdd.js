function solve([num]) {

    return Number(num) % 2 == 0 ? 'even' : 'odd';

}

console.log(solve(['2'])); // even

console.log(solve(['3'])); // odd