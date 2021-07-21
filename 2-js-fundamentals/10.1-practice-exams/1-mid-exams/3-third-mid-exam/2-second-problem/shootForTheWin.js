function solve([nums, ...arr]) {

    let counter = 0;

    nums = nums.split(' ').map(Number);

    arr.slice(0, -1).map(Number).forEach(el => {

        if (el >= 0 && el < nums.length && nums[el] != -1) {

            counter++;

            let current = nums[el];

            nums[el] = -1;

            modifyArray(nums, current);

        }

    });

    return `Shot targets: ${counter} -> ${nums.join(' ')}`;

    function modifyArray(arr, num) {

        arr.forEach((el, i, arr) => {

            if (el != -1) {

                el > num ? arr[i] -= num : arr[i] += num;

            }

        });

    }

}

console.log(solve(['24 50 36 70', '0', '4', '3', '1', 'End']));