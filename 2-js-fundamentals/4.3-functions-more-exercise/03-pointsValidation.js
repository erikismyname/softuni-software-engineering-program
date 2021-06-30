function solve([x1, y1, x2, y2]) {

    return `{${x1}, ${y1}} to {0, 0} is ${validate(x1, y1, 0, 0)}\n{${x2}, ${y2}} to {0, 0} is ${validate(0, 0, x2, y2)}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${validate(x1, y1, x2, y2)}`;

    function validate(x1, y1, x2, y2) {

        let a = x1 - x2;

        let b = y1 - y2;

        return Number.isInteger(Math.sqrt((a ** 2) + (b ** 2))) ? 'valid' : 'invalid';

    }

}

console.log(solve([3, 0, 0, 4]));
/*
{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid
*/