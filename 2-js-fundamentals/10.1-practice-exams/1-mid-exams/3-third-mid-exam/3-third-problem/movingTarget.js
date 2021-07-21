function solve([nums, ...arr]) {

    let result = [];

    nums = nums.split(' ').map(Number);

    let actions = {

        Shoot: (line) => {

            let [idx, power] = line.map(Number);

            if (idx >= 0 && idx < nums.length) {

                nums[idx] > power ? nums[idx] -= power : nums.splice(idx, 1);

            }

        },

        Add: (line) => {

            let [idx, value] = line.map(Number);

            idx >= 0 && idx < nums.length ? nums.splice(idx, 0, value) : result.push('Invalid placement!');

        },

        Strike: (line) => {

            let [idx, radius] = line.map(Number);

            if (radius == 0) {

                nums.splice(idx, 1);

            } else {

                idx - radius < 0 || idx + radius >= nums.length ? result.push('Strike missed!') : nums.splice(idx - radius, 1 + radius * 2);

            }

        }

    };

    for (let line of arr) {

        if (line == 'End') {

            break;

        }

        let [command, ...values] = line.split(' ');

        actions[command](values);

    }

    return `${result.join('\n')}\n${nums.join('|')}`;

}

console.log(solve(['1 2', 'Add 0 -1', 'End']));