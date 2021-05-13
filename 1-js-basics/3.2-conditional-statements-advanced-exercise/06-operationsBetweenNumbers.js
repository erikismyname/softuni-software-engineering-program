function solve([a, b, operator]) {

    a = Number(a);

    b = Number(b);

    let type = '';

    let data = {

        '+': a + b,

        '-': a - b,

        '*': a * b,

        '/' : a / b,

        '%': a % b

    }

    if (b == 0) {

        return `Cannot divide ${a} by zero`;

    }

    if (operator == '+' || operator == '-' || operator == '*') {

        data[operator] % 2 == 0 ? type = 'even' : type = 'odd';

        return `${a} ${operator} ${b} = ${data[operator]} - ${type}`;

    }

    return operator == '/' ? `${a} ${operator} ${b} = ${data[operator].toFixed(2)}` : `${a} ${operator} ${b} = ${data[operator]}`;

}

console.log(solve(['10', '12', '+']));
console.log(solve(['10', '1', '-']));
console.log(solve(['7', '3', '*']));
console.log(solve(['123', '12', '/']));
console.log(solve(['10', '3', '%']));
console.log(solve(['112', '0', '/']));
console.log(solve(['10', '0', '%']));