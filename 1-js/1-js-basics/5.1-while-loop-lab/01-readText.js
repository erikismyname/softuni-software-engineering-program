function solve(arr) {

    let index = 0;

    let current = arr[index];

    let result = [];

    while (current != 'Stop') {

        result.push(current);

        index++;

        current = arr[index];

    }

    return result.join('\n');

}

console.log(solve(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"])

);