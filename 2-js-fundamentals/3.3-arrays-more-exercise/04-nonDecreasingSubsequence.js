function solve(arr) {

    let max = arr[0];

    return arr.filter(el => {

        if (el >= max) {

            max = el;

        }

        return el >= max;

    }).join(' ');

}

console.log(solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])); // 1 3 8 10 12 24