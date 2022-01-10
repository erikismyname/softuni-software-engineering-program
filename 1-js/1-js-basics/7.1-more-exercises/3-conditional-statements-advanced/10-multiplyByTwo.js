function solve(arr) {

    let result = [];

    for (let a = 0; a < arr.length; a++) {

        let current = Number(arr[a]);

        if (current < 0) {

            result.push('Negative number!');

            break;

        }

        result.push(`Result: ${(current * 2).toFixed(2)}`);

    }

    return result.join('\n');

}

console.log(solve(['12', '43.2144', '12.3', '543.23', '-20']));