function solve(arr, commands) {

    let result = [];

    let data = {

        add: (index, [num]) => {

            arr.splice(index, 0, num);

        },

        addMany: (index, nums) => {

            arr.splice(index, 0, ...nums);

        },

        contains: (num) => {

            result.push(arr.indexOf(num));

        },

        remove: (index) => {

            arr.splice(index, 1);

        },

        shift: (num) => {

            for (let a = 0; a < num; a++) {

                arr.push(arr.shift());

            }

        },

        sumPairs: () => {

            let result = [];

            for (let a = 0; a < arr.length; a += 2) {

                arr[a + 1] == undefined ? result.push(arr[a]) : result.push(arr[a] + arr[a + 1]);

            }

            arr = result;

        },

        print: () => {

            result.push(`[ ${arr.join(', ')} ]`);

        }

    };

    commands.forEach(el => {

        let [name, valA, ...valB] = el.split(' ');

        valA = Number(valA);

        valB = valB.map(Number);

        data[name](valA, valB);

    });

    return result.join('\n');

}

console.log(solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    
)); // 0
// - 1
// [ 1, 8, 2, 4, 5, 6, 7 ]