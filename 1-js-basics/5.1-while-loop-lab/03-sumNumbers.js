function solve(arr) {

    let num = Number(arr.shift());

    let sum = 0;

    let index = 0;

    let current = arr[index];

    while (sum < num) {

        sum += Number(current);

        index++;

        current = arr[index];

    }

    return sum;

}

console.log(solve(["100",
    "100",
    "20",
    "30",
    "40"])
);