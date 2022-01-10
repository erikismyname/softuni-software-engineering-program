function solve([num]) {

    num = Number(num);

    let result = [];

    result.push('*'.repeat(num * 2) + ' '.repeat(num) + '*'.repeat(num * 2));

    for (let a = 0; a < num - 2; a++) {

        if (a == Math.ceil((num - 2) / 2) - 1) {

            result.push('*' + '/'.repeat((2 * num) - 2) + '*' + '|'.repeat(num) + '*' + '/'.repeat((2 * num) - 2) + '*');
            
        } else {

            result.push('*' + '/'.repeat((2 * num) - 2) + '*' + ' '.repeat(num) + '*' + '/'.repeat((2 * num) - 2) + '*');

        }
        
    }

    result.push('*'.repeat(num * 2) + ' '.repeat(num) + '*'.repeat(num * 2));

    return result.join('\n');

}

console.log(solve(['5']));