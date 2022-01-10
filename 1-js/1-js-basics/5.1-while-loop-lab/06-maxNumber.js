function solve(arr) {

    let index = 1;

    let current = arr[index];

    let biggestNum = arr[0];

    while (current != 'Stop') {

        current = Number(current);

        if (current > biggestNum) {

            biggestNum = current;

        }

        index++;

        current = arr[index];

    }

    return biggestNum;

}

console.log(solve(["-1",
"-2",
"Stop"])
);