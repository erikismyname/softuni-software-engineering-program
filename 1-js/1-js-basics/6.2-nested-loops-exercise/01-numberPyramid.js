function solve([num]) {

    num = Number(num);

    let result = [];

    let current = 1;

    let row = '';

    isBigger = false;

    for (let a = 1; a <= num; a++) {

        for (let b = 1; b <= a; b++) {

            if (current > num) {

                isBigger = true;

                break;

            }

            row += current + ' ';
            
            current++;
            
        }
        
        result.push(row);
        
        if (isBigger) {

            break;

        }

        row = '';

    }

    return result.join('\n');

}

console.log(solve(['7']));