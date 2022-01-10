function solve(arr) {

    let result = [];

    arr.forEach(el => {

        el < 0 ? result.unshift(el) : result.push(el);

    });

    return result.join('\n');

}

console.log(solve([7, -2, 8, 9])); // -2
// 7
// 8
// 9