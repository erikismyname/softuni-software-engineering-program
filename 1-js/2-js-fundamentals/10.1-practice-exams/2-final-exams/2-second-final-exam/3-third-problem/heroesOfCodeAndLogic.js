function solve([n, ...arr]) {

    let data = {};

    let result = [];

    arr.slice(0, n).forEach(el => {

        let [name, ...values] = el.split(' ');

        let [hP, mP] = values.map(Number);

        data[name] = { hP, mP };

    });

    let actions = {

        CastSpell: (heroName, [neededMp, spellName]) => {

            neededMp = Number(neededMp);

            if (data[heroName].mP >= neededMp) {

                data[heroName].mP -= neededMp;

                result.push(`${heroName} has successfully cast ${spellName} and now has ${data[heroName].mP} MP!`);

            } else {

                result.push(`${heroName} does not have enough MP to cast ${spellName}!`);

            }

        },

        TakeDamage: (heroName, [dmg, attacker]) => {

            dmg = Number(dmg);

            data[heroName].hP -= dmg;

            data[heroName].hP > 0 ? result.push(`${heroName} was hit for ${dmg} HP by ${attacker} and now has ${data[heroName].hP} HP left!`) : `${result.push(`${heroName} has been killed by ${attacker}!`)} ${delete data[heroName]}`;

        },

        Recharge: (heroName, [amount]) => {

            amount = Number(amount);

            if (data[heroName].mP + amount > 200) {

                result.push(`${heroName} recharged for ${200 - data[heroName].mP} MP!`);

                data[heroName].mP = 200;

            } else {

                result.push(`${heroName} recharged for ${amount} MP!`);

                data[heroName].mP += amount;

            }

        },

        Heal: (heroName, [amount]) => {

            amount = Number(amount);

            if (data[heroName].hP + amount > 100) {

                result.push(`${heroName} healed for ${100 - data[heroName].hP} HP!`);

                data[heroName].hP = 100;

            } else {

                result.push(`${heroName} healed for ${amount} HP!`);

                data[heroName].hP += amount;

            }

        }

    };

    arr.slice(n, -1).forEach(el => {

        let [command, name, ...values] = el.split(' - ');

        actions[command](name, values);

    });

    Object.entries(data).sort((a, b) => b[1].hP - a[1].hP || a[0].localeCompare(b[0])).forEach(el => {

        result.push(el[0]);

        result.push(`  HP: ${el[1].hP}`);

        result.push(`  MP: ${el[1].mP}`);

    });

    return result.join('\n');

}

console.log(solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]));