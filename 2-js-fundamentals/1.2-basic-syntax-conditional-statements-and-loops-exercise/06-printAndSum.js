function solve(numOne, numTwo) {

    let result = [];

    let sum = 0;

    for (let a = numOne; a <= numTwo; a++) {

        result.push(a);

        sum += a;

    }

    return `${result.join(' ')}\nSum: ${sum}`;

}

console.log(solve(5, 10)); // 5 6 ... 10
// Sum: 45