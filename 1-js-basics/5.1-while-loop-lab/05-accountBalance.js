function solve(arr) {

    let index = 0;

    let current = arr[index];

    let result = [];

    let sum = 0;

    while (current != 'NoMoreMoney') {

        current = Number(current);

        if (current < 0) {

            result.push('Invalid operation!');

            break;

        }

        sum += current;

        result.push(`Increase: ${current.toFixed(2)}`);

        index++;

        current = arr[index];

    }

    result.push(`Total: ${sum.toFixed(2)}`);

    return result.join('\n');

}

console.log(solve(["120",
    "45.55",
    "-150"])
);