function solve(arr) {

    let areEqual = false;

    let index = 0;

    if (arr.length == 1) {

        return '0';

    }

    for (let a = 0; a < arr.length; a++) {

        let leftSum = 0;

        let rightSum = 0;

        for (let b = 0; b < a; b++) {

            leftSum += arr[b];

        }

        for (let c = a + 1; c < arr.length; c++) {

            rightSum += arr[c];

        }

        if (leftSum == rightSum) {

            areEqual = true;

            index = a;

        }

    }

    return areEqual ? index : 'no';

}

console.log(solve([1, 2, 3, 3])); // 2

console.log(solve([1, 2])); // no

console.log(solve([1])); // 0