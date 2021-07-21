function solve([list, ...arr]) {

    list = list.split('!');

    let actions = {

        urgent: ([item]) => {

            if (!list.includes(item)) {

                list.unshift(item);

            }

        },

        unnecessary: ([item]) => {

            if (list.includes(item)) {

                list.splice(list.indexOf(item), 1);

            }

        },

        correct: ([oldI, newI]) => {

            if (list.includes(oldI)) {

                list[list.indexOf(oldI)] = newI;

            }

        },

        rearrange: ([item]) => {

            if (list.includes(item)) {

                list.splice(list.indexOf(item), 1);

                list.push(item);

            }

        }

    };

    arr.forEach(el => {

        let [name, ...value] = el.split(' ');

        if (name != 'Go') {

            actions[name.toLowerCase()](value);

        }

    });

    return list.join(', ');

}

console.log(solve([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]));