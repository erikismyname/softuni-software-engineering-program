function solve(arr) {

    while (arr.length > 1) {

        let condensed = [];

        for (let a = 0; a < arr.length - 1; a++) {

            condensed.push(arr[a] + arr[a + 1]);

        }

        arr = condensed;

    }

    return arr[0];

}

console.log(solve([2, 10, 3])); // 25

console.log(solve([1])); // 1 is already condensed to number