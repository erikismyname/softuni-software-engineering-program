function solve([inventory, ...commands]) {

    inventory = inventory.split(' ');

    let data = {

        buy: (name) => {

            if (!inventory.includes(name)) {

                inventory.push(name);

            }

        },

        trash: (name) => {

            if (inventory.includes(name)) {

                inventory.splice(inventory.indexOf(name), 1);

            }

        },

        repair: (name) => {

            if (inventory.includes(name)) {

                inventory.splice(inventory.indexOf(name), 1);

                inventory.push(name);

            }

        },

        upgrade: (line) => {

            let [name, upgrade] = line.split('-');

            if (inventory.includes(name)) {

                inventory.splice(inventory.indexOf(name) + 1, 0, `${name}:${upgrade}`);

            }

        }

    };

    commands.forEach(el => {

        let [name, val] = el.split(' ');

        data[name.toLowerCase()](val);

    });

    return inventory.join(' ');

}

console.log(solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)); // SWORD SWORD:Steel Bag Spear