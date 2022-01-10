function solve(num) {

    return num % 4 == 0 && num % 100 != 0 || num % 400 == 0 ? 'yes' : 'no';

}

console.log(solve(1984)); // yes

console.log(solve(2003)); // no