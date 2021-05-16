function solve([str]) {

    let result = [];

    for (let a = 0; a < str.length; a++) {

        result.push(str[a]);

    }

    return result.join('\n');

}

console.log(solve(['softuni']));