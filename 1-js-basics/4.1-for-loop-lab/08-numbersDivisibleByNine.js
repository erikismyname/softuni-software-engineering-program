function solve([numOne, numTwo]) {

    numOne = Number(numOne);

    numTwo = Number(numTwo);

    let sum = 0;

    let numbers = [];

    for (let a = numOne; a <= numTwo; a++) {

        if (a % 9 == 0) {

            sum += a;

            numbers.push(a);

        }
    }

    return `The sum: ${sum}\n${numbers.join('\n')}`;

}

console.log(solve(['100', '200']));