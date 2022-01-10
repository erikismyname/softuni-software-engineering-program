function solve([nums, ...arr]) {

    nums = nums.split(' ').map(Number);

    let actions = {

        swap: (values) => {

            let [idxOne, idxTwo] = values.map(Number);

            let numOne = nums[idxOne];

            nums[idxOne] = nums[idxTwo];

            nums[idxTwo] = numOne;

        },

        multiply: (values) => {

            let [idxOne, idxTwo] = values.map(Number);

            let result = nums[idxOne] * nums[idxTwo];

            nums.splice(idxOne, 1, result);

        },

        decrease: () => {

            nums = nums.map(el => el - 1);

        }

    };

    arr.slice(0, -1).forEach(el => {

        let [command, ...values] = el.split(' ');

        actions[command](values);

    });

    return nums.join(', ');

}

console.log(solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]));

console.log(solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]));