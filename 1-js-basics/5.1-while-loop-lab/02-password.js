function solve(arr) {

    let username = arr.shift();

    let password = arr.shift();

    let index = 0;

    let current = arr[index];

    while (true) {

        if (current == password) {

            return `Welcome ${username}!`;

        }

        index++;

        current = arr[index];

    }

}

console.log(solve(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
);