function solve(str) {

    let result = [];

    let pattern = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})(\1)/g;

    let match = pattern.exec(str);

    while (match) {

        result.push(match.groups.name);

        match = pattern.exec(str);

    }

    return result.length ? `Destinations: ${result.join(', ')}\nTravel Points: ${result.map(el => el.length).reduce((acc, c) => acc + c)}` : 'Destinations:\nTravel Points: 0';

}

console.log(solve('a'));