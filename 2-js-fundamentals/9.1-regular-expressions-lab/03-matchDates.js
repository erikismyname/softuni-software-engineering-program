function solve(arr) {

    let result = [];

    let pattern = /\b(?<day>\d{2})(\.|-|\/)(?<month>[A-Z][a-z]{2})(\2)(?<year>\d{4})\b/g;

    let match = pattern.exec(arr);

    while (match) {

        result.push(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);

        match = pattern.exec(arr);

    }

    return result.join('\n');

}

console.log(solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
]));