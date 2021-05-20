function solve([num]) {

    num = Number(num);

    let sum = 1;

    let result = [];

    while (sum <= num) {

        result.push(sum);
        
        sum = (sum * 2) + 1;
        
    }

    return result.join('\n');

}

console.log(solve(['31']));