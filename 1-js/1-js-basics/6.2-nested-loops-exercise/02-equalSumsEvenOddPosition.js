function solve([numOne, numTwo]) {

    numOne = Number(numOne);

    numTwo = Number(numTwo);

    let result = [];

    let sumOdd = 0;

    let sumEven = 0;

    for (let a = numOne; a <= numTwo; a++) {

        let str = a.toString();

        for (let b = 0; b < str.length; b++) {

            b % 2 == 0 ? sumEven += Number(str[b]) : sumOdd += Number(str[b]);

        }

        if (sumOdd == sumEven) {

            result.push(a);

        }

        sumOdd = 0;

        sumEven = 0;

    }

    return result.join(' ');

}

console.log(solve(["299900",
"300000"])

);