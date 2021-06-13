function solve([startNum, endNum]) {

    let result = [];

    let firstNumS = Number(startNum[0]);

    let firstNumE = Number(endNum[0]);

    let secondNumS = Number(startNum[1]);

    let secondNumE = Number(endNum[1]);

    let thirdNumS = Number(startNum[2]);

    let thirdNumE = Number(endNum[2]);

    let fourthNumS = Number(startNum[3]);

    let fourthNumE = Number(endNum[3]);

    for (let a = firstNumS; a <= firstNumE; a++) {

        for (let b = secondNumS; b <= secondNumE; b++) {

            for (let c = thirdNumS; c <= thirdNumE; c++) {

                for (let d = fourthNumS; d <= fourthNumE; d++) {

                    if ([...`${a}${b}${c}${d}`].every(el => el % 2 != 0)) {

                        result.push(`${a}${b}${c}${d}`);

                    }

                }

            }
        }

    }

    return result.join(' ');

}

console.log(solve(['2345', '6789']));

console.log(solve(['3256', '6579']));

console.log(solve(['1365', '5877']));