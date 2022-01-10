function solve(num) {

    num = num.toString().split('').map(Number);

    let oddSum = num.filter(el => el % 2 != 0).reduce((acc, c) => acc + c, 0);

    let evenSum = num.filter(el => el % 2 == 0).reduce((acc, c) => acc + c, 0);

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}

console.log(solve(1000435)); // Odd sum = 9, Even sum = 4