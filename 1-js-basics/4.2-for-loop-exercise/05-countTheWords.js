function solve([text]) {

    return text.split(' ').length <= 10 ? `The message was send successfully!` : `The message is too long to be send! Has ${text.split(' ').length} words.`;

}

console.log(solve(['This message has exactly eleven words. One more as it\'s allowed!']));