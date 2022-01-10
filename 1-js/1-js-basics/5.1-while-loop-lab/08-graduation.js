function solve(arr) {

    let name = arr.shift();

    let index = 0;

    let current = arr[index];

    let counter = 0;

    let grade = 1;

    let sum = 0;

    while (counter <= 1) {

        current = Number(current);

        if (grade > 12) {

            break;

        }

        if (current >= 4) {

            sum += current;

            grade++;

        } else {

            counter++;

        }

        index++;

        current = arr[index];

    }

    if (counter > 1) {

        return `${name} has been excluded at ${grade} grade`;

    }

    return `${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`;

}

console.log(solve(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
);