function solve([items, ...arr]) {

    items = items.split(', ');

    let actions = {

        collect: (item) => {

            if (!items.includes(item)) {

                items.push(item);

            }

        },

        drop: (item) => {

            if (items.includes(item)) {

                items.splice(items.indexOf(item), 1);

            }

        },

        'combine items': (line) => {

            let [oldI, newI] = line.split(':');

            if (items.includes(oldI)) {

                items.splice(items.indexOf(oldI) + 1, 0, newI);

            }

        },

        renew: (item) => {

            if (items.includes(item)) {

                items.splice(items.indexOf(item), 1);

                items.push(item);

            }

        }

    };

    arr.forEach(el => {

        let [name, value] = el.split(' - ');

        if (name != 'Craft!') {

            actions[name.toLowerCase()](value);

        }

    });

    return items.join(', ');

}

console.log(solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  ));