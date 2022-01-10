function solve([str]) {

    let result = [];

    let mirrorWords = [];

    let counter = 0;

    let pattern = /(@|#)(?<fName>[A-Za-z]{3,})(\1)(\1)(?<sName>[A-Za-z]{3,})(\1)/g;

    let match = pattern.exec(str);

    if (!match) {

        result.push('No word pairs found!');

    }

    while (match) {

        counter++;

        if (validate(match.groups.fName, match.groups.sName)) {

            mirrorWords.push(`${match.groups.fName} <=> ${match.groups.sName}`);

        }

        match = pattern.exec(str);

    }

    if (counter > 0) { result.push(`${counter} word pairs found!`); }

    result.push(mirrorWords.length ? 'The mirror words are:' : 'No mirror words!');

    return mirrorWords.length ? `${result.join('\n')}\n${mirrorWords.join(', ')}` : result.join('\n');

    function validate(wordOne, wordTwo) {

        return wordOne == wordTwo.split('').reverse().join('') && wordTwo == wordOne.split('').reverse().join('');

    }

}

// console.log(solve([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
// ]));

// console.log(solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']));

console.log(solve([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]));