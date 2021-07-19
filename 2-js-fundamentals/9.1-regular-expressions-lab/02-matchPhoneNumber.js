function solve(arr) {

    let result = [];

    let pattern = /\+359(-| )2(\1)\d{3}(\1)\d{4}\b/g;

    let match = pattern.exec(arr);

    while(match) {

        result.push(match[0]);

        match = pattern.exec(arr);

    }

    return result.join(', ');

}

console.log(solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
]));