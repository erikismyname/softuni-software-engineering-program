function solve(arr) {

    let result = [];

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let match = pattern.exec(arr);

    while (match) {

        result.push(match[0]);

        match = pattern.exec(arr);

    }

    return result.join(' ');

}

console.log(solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
]));