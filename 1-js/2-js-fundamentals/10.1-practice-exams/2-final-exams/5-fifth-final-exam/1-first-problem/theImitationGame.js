function solve([message, ...arr]) {

    let actions = {

        Move: ([num]) => {

            num = Number(num);

            message = message.substr(num) + message.substr(0, num);

        },

        Insert: ([idx, val]) => {

            idx = Number(idx);

            message = message.substr(0, idx) + val + message.substr(idx);

        },

        ChangeAll: ([oldStr, newStr]) => {

            while (message.includes(oldStr)) {

                message = message.replace(oldStr, newStr);

            }

        }

    };

    arr.slice(0, -1).forEach(el => {

        let [command, ...values] = el.split('|');

        actions[command](values);

    });

    return `The decrypted message is: ${message}`;

}

console.log(solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]));