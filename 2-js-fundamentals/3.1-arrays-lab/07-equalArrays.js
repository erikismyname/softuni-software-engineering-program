function solve(arrOne, arrTwo) {

    let areIdentical = true;

    let index = 0;

    for (let a = 0; a < arrOne.length; a++) {

        if (arrOne[a] != arrTwo[a]) {

            areIdentical = false;

            index = a;

            break;

        }

    }

    return areIdentical ? `Arrays are identical. Sum: ${arrOne.map(Number).reduce((acc, c) => acc + c)}` : `Arrays are not identical. Found difference at ${index} index`;

}

console.log(solve(['10', '20', '30'], ['10', '20', '30']));
// Arrays are identical. Sum: 60

console.log(solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])); // Arrays are not identical. Found difference at 2 index