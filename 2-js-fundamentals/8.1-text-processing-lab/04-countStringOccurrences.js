function solve(text, str) {

    let count = 0;

    text.split(' ').forEach(el => {

        if (el == str) {

            count++;

        }

    });

    return count;

}

console.log(solve("This is a word and it also is a sentence",
    "is"
));