function solve(str) {

    let result = [];

    [...str].forEach((el, i, arr) => {

        if (arr[i] != arr[i + 1]) {

            result.push(el);

        }

    });

    return result.join('');

}

console.log(solve('aaaaabbbbbcdddeeeedssaa'));