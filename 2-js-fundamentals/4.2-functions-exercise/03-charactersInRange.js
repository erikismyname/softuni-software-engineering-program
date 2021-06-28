function solve(charOne, charTwo) {

    return charOne.charCodeAt(0) > charTwo.charCodeAt(0) ? print(charTwo, charOne) : print(charOne, charTwo);

    function print(start, end) {

        start = start.charCodeAt(0);

        end = end.charCodeAt(0);

        let result = [];

        for (let a = start + 1; a < end; a++) {

            result.push(String.fromCharCode(a))

        }

        return result.join(' ');

    }

}

console.log(solve('a', 'd')); // b c 