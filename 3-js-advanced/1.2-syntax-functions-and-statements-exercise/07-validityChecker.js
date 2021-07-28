function solve(x1, y1, x2, y2) {

    return `{${x1}, ${y1}} to {0, 0} is ${checkValidity(x1, y1, 0, 0)}\n{${x2}, ${y2}} to {0, 0} is ${checkValidity(x2, y2, 0, 0)}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(x1, y1, x2, y2)}`;

    function checkValidity(x1, y1, x2, y2) {

        const a = x2 - x1;

        const b = y2 - y1;

        return Number.isInteger(Math.sqrt((a * a) + (b * b))) ? 'valid' : 'invalid';

    }

}