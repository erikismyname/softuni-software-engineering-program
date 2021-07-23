function solve(arr) {

    let result = [];

    let data = {};

    let actions = {

        plunder: (town, [pop, gold]) => {

            result.push(`${town} plundered! ${gold} gold stolen, ${pop} citizens killed.`);

            data[town].gold -= gold;

            data[town].pop -= pop;

            if (data[town].pop == 0 || data[town].gold == 0) {

                delete data[town];

                result.push(`${town} has been wiped off the map!`);

            }

        },

        prosper: (town, [gold]) => {

            if (gold < 0) {

                result.push('Gold added cannot be a negative number!');

                return;

            }

            data[town].gold += gold;

            result.push(`${gold} gold added to the city treasury. ${town} now has ${data[town].gold} gold.`);

        }

    };

    for (let line of arr) {

        if (line == 'Sail') {

            break;

        }

        let [name, ...values] = line.split('||');

        let [pop, gold] = values.map(Number);

        if (!data[name]) {

            data[name] = { pop: 0, gold: 0 };

        }

        data[name].pop += pop;

        data[name].gold += gold;

    }

    arr.slice(arr.indexOf('Sail') + 1).forEach(el => {

        let [command, town, ...values] = el.split('=>');

        if (command != 'End') {

            actions[command.toLowerCase()](town, values.map(Number));

        }

    });

    let entries = Object.entries(data);

    entries.length == 0 ? result.push('Ahoy, Captain! All targets have been plundered and destroyed!') : `${result.push(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`)} ${entries.sort((a, b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0])).map(el => `${el[0]} -> Population: ${el[1].pop} citizens, Gold: ${el[1].gold} kg`).forEach(el => result.push(el))}`;

    return result.join('\n');

}

console.log(solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]));