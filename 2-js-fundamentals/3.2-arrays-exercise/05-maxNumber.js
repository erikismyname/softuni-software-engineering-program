function solve(arr) {

    let result = [];

    for (let a = 0; a < arr.length; a++) {

        let isBigger = true;

        let current = arr[a];

        for (let b = a + 1; b < arr.length; b++) {

            if (current <= arr[b]) {

                isBigger = false;

                break;

            }

        }

        if (isBigger) {

            result.push(current);

        }

    }

    return result.join(' ');

}

console.log(solve([1, 4, 3, 2])); // 4 3 2