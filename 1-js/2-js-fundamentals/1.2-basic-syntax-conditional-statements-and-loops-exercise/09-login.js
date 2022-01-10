function solve(arr) {

    let username = arr.shift();

    let password = username.split('').reverse().join('');

    let counter = 0;

    let result = [];

    for (let line of arr) {

        if (line != password) {

            counter++;

            if (counter > 3) {

                result.push(`User ${username} blocked!`);

                return result.join('\n');

            }

            result.push('Incorrect password. Try again.');
            

        } else {

            result.push(`User ${username} logged in.`);

            return result.join('\n');

        }

    }

}

console.log(solve(['Acer','login','go','let me in','recA']));
// Incorrect password. Try again.
//...
// User Acer logged in.