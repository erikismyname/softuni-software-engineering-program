function solve(arr, num) {

    let result = [];

    for (let a = 0; a < arr.length - 1; a++) {

        for (let b = a + 1; b < arr.length; b++) {

            if (arr[a] + arr[b] == num) {

                result.push(`${arr[a]} ${arr[b]}`);

            }

        }

    }

    return result.join('\n');

}

console.log(solve([14, 20, 60, 13, 7, 19, 8],
    27

)); // 1 7
// 6 2