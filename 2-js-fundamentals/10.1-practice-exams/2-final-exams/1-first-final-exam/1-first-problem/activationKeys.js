function solve([rawKey, ...arr]) {

    let result = [];

    let actions = {

        generate: () => {

            result.push(`Your activation key is: ${rawKey}`);

        },

        contains: ([el]) => {

            rawKey.includes(el) ? result.push(`${rawKey} contains ${el}`) : result.push(`Substring not found!`);

        },

        flip: ([type, start, end]) => {

            start = Number(start);

            end = Number(end);

            let chars = [...rawKey].slice(start, end);

            type == 'Upper' ? chars = chars.map(el => el.toUpperCase()) : chars = chars.map(el => el.toLowerCase());

            rawKey = rawKey.substring(0, start) + chars.join('') + rawKey.substring(end); 

            result.push(rawKey);

        },

        slice: ([start, end]) => {

            start = Number(start);

            end = Number(end);

            rawKey = rawKey.substring(0, start) + rawKey.substring(end);

            result.push(rawKey);

        }

    };

    arr.forEach(el => {

        let [command, ...args] = el.split('>>>');

        actions[command.toLowerCase()](args);

    });

    return result.join('\n');

}

console.log(solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ]));