function solve(str) {

    const pattern = /[A-Za-z0-9]+/g;

    const matches = str.match(pattern);

    return matches.map(e => e.toUpperCase()).join(', ');

}