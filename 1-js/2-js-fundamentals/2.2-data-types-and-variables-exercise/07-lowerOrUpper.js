function solve(char) {

    return char == char.toUpperCase() ? 'upper-case' : 'lower-case';

}

console.log(solve('L')); // upper-case

console.log(solve('f')); // lower-case