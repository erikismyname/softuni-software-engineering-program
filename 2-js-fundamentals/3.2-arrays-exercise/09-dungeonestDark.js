function solve([str]) {

    let health = 100;

    let coins = 0;

    let result = [];

    let lvl = 1;

    let isWon = true;

    for (let line of str.split('|')) {

        if (line.includes('potion')) {

            heal(line);

        } else if (line.includes('chest')) {

            chest(line);

        } else {

            if (fight(line)) {

                result.push(`Best room: ${lvl}`);

                isWon = false;

                break;

            }

        }

        lvl++;

    }

    if (isWon) {

        result.push(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);

    }

    return result.join('\n');

    function fight(line) {

        let isDead = false;

        let [name, dmg] = line.split(' ');

        dmg = Number(dmg);

        health -= dmg;

        health <= 0 ? `${result.push(`You died! Killed by ${name}.`)} ${isDead = true}` : result.push(`You slayed ${name}.`);

        return isDead;

    }

    function chest(line) {

        let [name, val] = line.split(' ');

        val = Number(val);

        coins += val;

        result.push(`You found ${val} coins.`);

    }

    function heal(line) {

        let [name, val] = line.split(' ');

        val = Number(val);

        result.push(`You healed for ${health + val > 100 ? 100 - health : val} hp.`, `Current health: ${health + val > 100 ? health = 100 : health += val} hp.`)

    }

}

console.log(solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]));
/*
You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 coins.
You died! Killed by boss.
Best room: 6
*/