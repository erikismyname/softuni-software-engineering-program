function solve([num]) {

    num = Number(num);

    let result = [];

    let first = 0;

    for (let a = 0; a < (num + 1) / 2; a++) {

        if (num % 2 == 0 && a == 0) {

            result.push('*'.repeat(2));

            fist = 2;

        } else if (num % 2 != 0 && a == 0) {

            result.push('*'.repeat(1));

            first = 1

        } else {

            if (first == 2) {

                result.push('*'.repeat(first + 2));

                first += 2;
            
            } else {

                result.push('*'.repeat(first + 1));

                first += 1;

            }

        }

    }

    return result.join('\n');

}

console.log(solve(['3']));