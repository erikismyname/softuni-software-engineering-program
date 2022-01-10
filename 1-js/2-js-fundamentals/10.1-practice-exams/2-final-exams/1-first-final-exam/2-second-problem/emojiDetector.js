function solve([str]) {

    let coolThreshold = str.match(/[\d]/g).map(Number).reduce((acc, c) => acc * c);

    let emojiMatch = str.match(/(:{2}|\*{2})[A-Z][a-z]{2,}(\1)/g);

    let result = [`Cool threshold: ${coolThreshold}`, `${emojiMatch.length} emojis found in the text. The cool ones are:`];

    emojiMatch.forEach(el => {

        let sum = [...el].slice(2, -2).map(el => el.charCodeAt(0)).reduce((acc, c) => acc + c);

        if (sum >= coolThreshold) {

            result.push(el);

        }

    });

    return result.join('\n');

}

console.log(solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]));