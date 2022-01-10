function solve([num]) {

    num = Number(num);

    let counter = 0;

    for (let a = 0; a <= num; a++) {

        for (let b = 0; b <= num; b++) {

            for (let c = 0; c <= num; c++) {

                if (a + b + c == num) {

                    counter++;

                }

            }

        }

    }

    return counter;

}

console.log(solve(['25']));