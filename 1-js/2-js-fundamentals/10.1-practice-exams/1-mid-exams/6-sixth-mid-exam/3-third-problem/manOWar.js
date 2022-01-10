function solve([pirate, enemy, maxHealth, ...arr]) {

    pirate = pirate.split('>').map(Number);

    enemy = enemy.split('>').map(Number);

    maxHealth = Number(maxHealth);

    let result = [];

    let win = false;

    let lose = false;

    let actions = {

        Fire: (values) => {

            let [idx, dmg] = values.map(Number);

            if (validate(idx, enemy)) {

                if (enemy[idx] - dmg <= 0) {

                    win = true;

                    result.push('You won! The enemy ship has sunken.')

                    return;

                }

                enemy[idx] -= dmg;

            }

        },

        Defend: (values) => {

            let [startIdx, endIdx, dmg] = values.map(Number);

            if (validate(startIdx, pirate) && validate(endIdx, pirate)) {

                let range = pirate.slice(startIdx, endIdx + 1);

                if (range.some(el => el - dmg <= 0)) {

                    result.push('You lost! The pirate ship has sunken.');

                    lose = true;

                    return;

                }

                for (let a = startIdx; a <= endIdx; a++) {

                    pirate[a] -= dmg;

                }

            }

        },

        Repair: (values) => {

            let [idx, health] = values.map(Number);

            if (validate(idx, pirate)) {

                pirate[idx] + health > maxHealth ? pirate[idx] = maxHealth : pirate[idx] += health;

            }

        },

        Status: () => {

            result.push(`${pirate.filter(el => el < maxHealth * 0.20).length} sections need repair.`);

        }

    };

    for (let line of arr.slice(0, -1)) {

        let [command, ...values] = line.split(' ');

        actions[command](values);

        if (win || lose) {

            break;

        }

    }

    return win || lose ? result.join('\n') : `${result.join('\n')}\nPirate ship status: ${pirate.reduce((acc, c) => acc + c)}\nWarship status: ${enemy.reduce((acc, c) => acc + c)}`;

    function validate(idx, arr) {

        return idx >= 0 && idx < arr.length;

    }

}

console.log(solve([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]));

console.log(solve([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
]));