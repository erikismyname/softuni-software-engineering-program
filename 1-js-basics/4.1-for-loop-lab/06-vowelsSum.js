function solve([str]) {

    let sum = 0;

    for (let a = 0; a < str.length; a++) {

        if (str[a] == 'a') {

            sum += 1;

        }

        if (str[a] == 'e') {

            sum += 2;

        }

        if (str[a] == 'i') {

            sum += 3;

        }

        if (str[a] == 'o') {

            sum += 4;

        }

        if (str[a] == 'u') {

            sum += 5;

        }

    }

    return sum;

}

console.log(solve(['hello']));