function solve(arr) {

    let data = {};

    arr.forEach(el => {

        if (!data[el]) {

            data[el] = 0;

        }

        data[el]++;

    });

    return Object.entries(data).sort((a, b) => b[1] - a[1]).map(el => `${el[0]} -> ${el[1]} times`).join('\n');

}

console.log(solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]));
/*
sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times
*/