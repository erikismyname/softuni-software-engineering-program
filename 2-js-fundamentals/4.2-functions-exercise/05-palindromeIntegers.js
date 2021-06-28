function solve(arr) {

    let result = [];

    arr.forEach(el => {

        el == el.toString().split('').reverse().join('') ? result.push('true') : result.push('false');

    });

    return result.join('\n');

}

console.log(solve([123,323,421,121])); // false
// true
// false
// true