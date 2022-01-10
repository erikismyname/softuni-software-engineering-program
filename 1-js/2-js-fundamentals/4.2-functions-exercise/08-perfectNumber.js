function solve(num) {

    let result = [];

    for (let a = 1; a < num; a++) {

        if (num % a == 0) {

            result.push(a);

        }

    }

    return result.reduce((acc, c) => acc + c) == num ? 'We have a perfect number!' : 'It\'s not so perfect.';

}

// console.log(solve(6)); // We have a perfect number!

console.log(solve(1236498)); // It's not so perfect.