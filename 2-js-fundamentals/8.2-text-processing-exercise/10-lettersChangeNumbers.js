function solve(str) {

    let letters = 'abcdefghijklmnopqrstuvwxyz';

    let sum = 0;

    str.split(' ').filter(el => el != '').forEach(el => {

        el = el.split('');

        let firstL = el.shift();

        let lastL = el.pop();

        let num = Number(el.join(''));

        let operationOne = firstL == firstL.toUpperCase() ? num / (letters.indexOf(firstL.toLowerCase()) + 1) : num * (letters.indexOf(firstL) + 1);

        sum += lastL == lastL.toUpperCase() ? operationOne - (letters.indexOf(lastL.toLowerCase()) + 1) : operationOne + (letters.indexOf(lastL) + 1);

    });

    return sum.toFixed(2);

}

console.log(solve('P34562Z q2576f   H456z'));