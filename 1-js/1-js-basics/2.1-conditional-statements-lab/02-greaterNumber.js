function solve([numOne, numTwo]) {

    return Number(numOne) > Number(numTwo) ? numOne : numTwo;

}

console.log(solve(['5', '3'])); // 5

console.log(solve(['-5', '5'])); // 5

console.log(solve(['10', '10'])); // 10