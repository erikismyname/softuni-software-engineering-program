function solve([loot, ...arr]) {

    loot = loot.split('|');

    let actions = {

        Loot: (values) => {

            values.forEach(el => {

                if (!loot.includes(el)) {

                    loot.unshift(el);

                }

            });

        },

        Drop: ([idx]) => {

            idx = Number(idx);

            if (idx >= 0 && idx < loot.length) {

                let dropped = loot.splice(idx, 1);

                loot.push(...dropped);

            }

        },

        Steal: ([count]) => {

            count = Number(count);

            let stolen = count <= loot.length ? loot.splice(loot.length - count, count) : loot.splice(0, loot.length);

            console.log(stolen.join(', '));

        }

    };

    arr.slice(0, -1).forEach(el => {

        let [command, ...values] = el.split(' ');

        actions[command](values);

    });

    console.log(`${!loot.length ? 'Failed treasure hunt.' : `Average treasure gain: ${loot.reduce(reducer, 0)} pirate credits.`}`);

    function reducer(acc, c, i, arr) {

        let total = acc + c.length;

        if (i == arr.length - 1) {

            return (total / arr.length).toFixed(2);

        }

        return total;

    }

}

solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]);

solve([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
]);