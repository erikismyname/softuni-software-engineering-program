function solve(arr) {

    let result = [];

    let num = 1;

    arr.forEach(el => {

        el == 'add' ? result.push(num) : result.pop();

        num++;

    });

    return result.length ? result.join(' ') : 'Empty';

}

console.log(solve(['add', 'add', 'add', 'add'])); // 1 2 3 4

console.log(solve(['remove', 'remove', 'remove'])); // Empty