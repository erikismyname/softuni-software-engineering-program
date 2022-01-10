function solve(arr) {

    let temp = arr.shift().split(' ').map(Number);

    let data = {

        add: (num) => temp.push(num),

        remove: (num) => temp = temp.filter(el => el != num),

        removeat: (idx) => temp.splice(idx, 1),

        insert: (num, idx) => temp.splice(idx, 0, num)

    };

    arr.forEach(el => {

        let [command, a, b] = el.split(' ');

        a = Number(a);

        b = Number(b);

        data[command.toLowerCase()](a, b);

    });

    return temp.join(' ');

}

console.log(solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)); // 4 53 6 8 43 3