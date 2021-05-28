function solve([numOne, numTwo, magicNum]) {

    numOne = Number(numOne);

    numTwo = Number(numTwo);

    magicNum = Number(magicNum);

    let combination = 0;

    let isFound = false;

    let firstNum = 0;

    let secondNum = 0;

    for (let a = numOne; a <= numTwo; a++) {

        if (isFound) {

            break;

        }

        for (let b = numOne; b <= numTwo; b++) {

            combination++;

            if (a + b == magicNum) {

                firstNum = a;

                secondNum = b;

                isFound = true;

                break;

            }

        }

    }

    return isFound ? `Combination N:${combination} (${firstNum} + ${secondNum} = ${firstNum + secondNum})` : `${combination} combinations - neither equals ${magicNum}`;

}

console.log(solve(["23",
    "24",
    "20"])
);