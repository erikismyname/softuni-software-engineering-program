function solve(num) {

    if (num % 10 == 0) {

        return 'The number is divisible by 10';

    } else if (num % 7 == 0) {

        return 'The number is divisible by 7';

    } else if (num % 6 == 0) {

        return 'The number is divisible by 6';

    } else if (num % 3 == 0) {

        return 'The number is divisible by 3';

    } else if (num % 2 == 0) {

        return 'The number is divisible by 2';

    }

    return 'Not divisible';

}

console.log(solve(30)); // The number is divisible by 10

console.log(solve(1643)); // Not divisible