function performOperations(arr) {

    const nums = [];

    for (let line of arr) {

        if (!isNaN(line)) {

            nums.push(line);

        } else {

            if (nums.length < 2) {

                return 'Error: not enough operands!';

            }

            nums.push(calcNums(nums.pop(), nums.pop(), line));

        }

    }

    return nums.length == 1 ? nums[0] : 'Error: too many operands!';

    function calcNums(a, b, operator) {

        const operations = {

            '+': () => b + a,

            '-': () => b - a,

            '*': () => b * a,

            '/': () => b / a,

        };

        return operations[operator]();

    }

}

console.log(performOperations([3,
    4,
    '+']
));

console.log(performOperations([5,
    3,
    4,
    '*',
    '-']
));

console.log(performOperations([7,
    33,
    8,
    '-']
));

console.log(performOperations([15,
    '/']
));