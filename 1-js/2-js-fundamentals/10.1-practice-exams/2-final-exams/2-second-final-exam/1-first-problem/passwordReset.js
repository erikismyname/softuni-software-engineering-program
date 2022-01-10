function solve([str, ...arr]) {

    let result = [];

    let actions = {

        Done: () => {

            result.push(`Your password is: ${str}`);

        },

        TakeOdd: () => {

            str = [...str].filter((el, i) => i % 2 != 0).join('');

            result.push(str);

        },

        Cut: (values) => {

            let [idx, length] = values.map(Number);

            str = str.substring(0, idx) + str.substring(idx + length);

            result.push(str);

        },

        Substitute: ([substr, substit]) => {

            if (!str.includes(substr)) {

                result.push('Nothing to replace!');

                return;

            }

            while (str.includes(substr)) {

                str = str.replace(substr, substit);

            }

            result.push(str);

        }

    };

    arr.forEach(el => {

        let [command, ...values] = el.split(' ');

        actions[command](values);

    });

    return result.join('\n');

}

console.log(solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ]));