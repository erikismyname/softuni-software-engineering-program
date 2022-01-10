function solve(str) {

    let result = [];

    let word = str[0];

    [...str].slice(1).forEach(el => {

        el != el.toUpperCase() ? word += el : `${result.push(word)}${word = el}`;

    });

    return result.length ? `${result.join(', ')}, ${word}` : word;

}

console.log(solve('SplitMeIfYouCanHaHaYouCantOrYouCan'));