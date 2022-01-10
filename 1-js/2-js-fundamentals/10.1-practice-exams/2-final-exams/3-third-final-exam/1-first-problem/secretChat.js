function solve([message, ...arr]) {

    let result = [];

    let actions = {

        InsertSpace: ([idx]) => {

            idx = Number(idx);

            message = message.substr(0, idx) + ' ' + message.substr(idx)

            result.push(message);

        },

        Reverse: ([substr]) => {

            if (!message.includes(substr)) {

                result.push('error');

                return;

            }

            let idx = message.indexOf(substr);

            message = [...message];

            message.splice(idx, substr.length);

            message.push([...substr].reverse().join(''));

            message = message.join('');

            result.push(message);

        },

        ChangeAll: ([substr, repl]) => {

            while (message.includes(substr)) {

                message = message.replace(substr, repl);

            }

            result.push(message);

        }

    };

    arr.slice(0, -1).forEach(el => {

        let [command, ...values] = el.split(':|:');

        actions[command](values);

    });

    return `${result.join('\n')}\nYou have a new text message: ${message}`;

}

console.log(solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]));