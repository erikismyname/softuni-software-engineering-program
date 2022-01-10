function solve(arr) {

    let total = 0;

    let index = 0;

    let current = arr[index];

    while (index < arr.length) {

        if (current == 'Going home') {

            index++;

            current = Number(arr[index]);

        }

        total += Number(current);

        index++;

        current = arr[index];

    }

    return total < 10000 ? `${10000 - total} more steps to reach goal.` : `Goal reached! Good job!\n${total - 10000} steps over the goal!`;

}

console.log(solve(["1000",
"1500",
"2000",
"6500"])




);