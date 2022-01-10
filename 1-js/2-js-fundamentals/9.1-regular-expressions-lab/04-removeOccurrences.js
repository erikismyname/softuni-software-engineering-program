function solve(word, text) {

    while (text.includes(word)) {

        text = text.replace(word, '');

    }

    return text;

}

console.log(solve('ice', 'kicegiciceeb'));