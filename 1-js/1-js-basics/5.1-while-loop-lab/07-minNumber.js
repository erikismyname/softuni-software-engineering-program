function solve(arr) {

    let index = 1;

    let current = arr[index];

    let smallestNum = arr[0];

    while (current != 'Stop') {

        current = Number(current);

        if (current < smallestNum) {

            smallestNum = current;

        }

        index++;

        current = arr[index];

    }

    return smallestNum;

}

console.log(solve(["45",
    "-20",
    "7",
    "99",
    "Stop"])
);