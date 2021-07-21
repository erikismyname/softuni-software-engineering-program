function solve(str) {

    let result = [];

    let health = 100;

    let bitcoins = 0;

    let roomCounter = 0;

    let isCompleted = true;

    let actions = {

        potion: (num) => {

            if (health + num > 100) {

                result.push(`You healed for ${100 - health} hp.\nCurrent health: 100 hp.`);

                health = 100;

            } else {

                health += num;

                result.push(`You healed for ${num} hp.\nCurrent health: ${health} hp.`);

            }

        },

        chest: (num) => {

            bitcoins += num;

            result.push(`You found ${num} bitcoins.`);

        },

        fight: (monster, dmg) => {

            if (health - dmg > 0) {

                health -= dmg;

                result.push(`You slayed ${monster}.`);

            } else {

                result.push(`You died! Killed by ${monster}.`);

                isCompleted = false;

            }

        }

    };

    for (let line of str.split('|')) {

        let [name, value] = line.split(' ');

        if (name != 'potion' && name != 'chest') {

            actions.fight(name, Number(value));

        } else {

            actions[name](Number(value));

        }

        roomCounter++;

        if (!isCompleted) {

            break;

        }

    };

    result.push(isCompleted ? `You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}` : `Best room: ${roomCounter}`);

    return result.join('\n');

}

console.log(solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'));