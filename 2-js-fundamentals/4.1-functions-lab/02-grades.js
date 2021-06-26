function solve(num) {

    let result = '';

    if (num < 3) {

        result = 'Fail';

    } else if (num >= 3 && num < 3.5) {

        result = 'Poor';

    } else if (num >= 3.5 && num < 4.5) {

        result = 'Good';

    } else if (num >= 4.5 && num < 5.5) {

        result = 'Very good';

    } else {

        result = 'Excellent';

    }

    return num < 3 ? `${result} (2)` : `${result} (${num.toFixed(2)})`;

}

console.log(solve(3.33)); // Poor (3.33)

console.log(solve(4.50)); // Very good (4.50);