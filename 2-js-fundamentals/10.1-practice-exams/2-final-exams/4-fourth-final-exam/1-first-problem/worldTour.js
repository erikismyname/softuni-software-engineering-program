function solve([initialStr, ...arr]) {

    let result = [];

    let actions = {

        Travel: () => {

            result.push(`Ready for world tour! Planned stops: ${initialStr}`);

        },

        'Add Stop': ([idx, str]) => {

            idx = Number(idx);

            if (validate(idx, initialStr)) {

                initialStr = initialStr.substr(0, idx) + str + initialStr.substr(idx);

            }

            result.push(initialStr);

        },

        'Remove Stop': (values) => {

            let [startIdx, endIdx] = values.map(Number);

            if (validate(startIdx, initialStr) && validate(endIdx, initialStr)) {

                initialStr = initialStr.substr(0, startIdx) + initialStr.substr(startIdx + (endIdx + 1 - startIdx));

            }

            result.push(initialStr);

        },

        Switch: ([oldStr, newStr]) => {

            let pattern = new RegExp(oldStr, 'g');

            initialStr = initialStr.replace(pattern, newStr);

            result.push(initialStr);

        }

    };

    arr.forEach(el => {

        let [command, ...values] = el.split(':');

        actions[command](values);

    });

    return result.join('\n');

    function validate(num, str) {

        return num >= 0 && num < str.length;

    }

}

console.log(solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:z:Hawai',
    'Travel',
    'a'
]));