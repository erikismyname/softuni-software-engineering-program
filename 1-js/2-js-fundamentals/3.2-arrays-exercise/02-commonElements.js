function solve(arrOne, arrTwo) {

    let result = [];

    arrOne.forEach(fEl => {

        arrTwo.forEach(sEl => {

            if (fEl === sEl) {

                result.push(fEl);

            }

        });

    });

    return result.join('\n');

}

console.log(solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])); // hello
// 4