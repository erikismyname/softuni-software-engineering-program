function solve(arr) {

    let destination = arr.shift();

    let neededMoney = Number(arr.shift());

    let sum = 0;

    let index = 0;

    let current = arr[index];

    let result = [];

    while (current != 'End') {

        if (sum < neededMoney) {

            sum += Number(current);

            index++;

            current = arr[index];

        }
        
        if (sum >= neededMoney) {

            result.push(`Going to ${destination}!`);

            if (current == 'End') {

                break;

            } else if (!isNaN(Number(current))) {

                index++;

                current = arr[index];

            }

            destination = current;

            index++;

            current = arr[index];

            neededMoney = Number(arr[index]);

            index++;

            current = arr[index];

            sum = 0;

        }

    }

    return result.join('\n');

}

console.log(solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
'111',
'123',
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
);