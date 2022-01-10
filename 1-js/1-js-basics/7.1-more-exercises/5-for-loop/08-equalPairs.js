function solve(arr) {

    let pairs = Number(arr.shift());

    let maxDifference = 0;

    let firstNum = Number(arr.shift());

    let secondNum = Number(arr.shift());

    let previousSum = firstNum + secondNum;

    for (let a = 1; a < pairs; a++) {

        firstNum = Number(arr.shift());

        secondNum = Number(arr.shift());

        let currentSum = firstNum + secondNum;

        let currentDifference = Math.abs(currentSum - previousSum);

        if (currentDifference > maxDifference) {

            maxDifference = currentDifference;

        }

        previousSum = currentSum;

    }

    return maxDifference ? `No, maxdiff=${maxDifference}` : `Yes, value=${previousSum}`;

}

console.log(solve(['2', '1', '2', '2', '2']));