function solve(num) {

    let counter = 0;

    for (let a = 1; a <= num; a++) {

        if (num % a == 0) {

            counter++;

        }

    }

    return counter == 2 ? 'true' : 'false';

}

console.log(solve(7)); // true

console.log(solve(8)); // false