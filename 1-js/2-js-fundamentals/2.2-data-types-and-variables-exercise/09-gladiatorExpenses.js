function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetCount = 0;

    let swordCount = 0;

    let shieldCount = 0;

    let armorCount = 0;

    let lock;

    for (let a = 1; a <= lostFights; a++) {

        if (a % 2 == 0) {

            helmetCount++;

        }

        if (a % 3 == 0) {

            swordCount++;

        }

        if (a % 2 == 0 && a % 3 == 0) {

            shieldCount++;

            lock = false;

        }

        if (shieldCount % 2 == 0 && shieldCount != 0 && !lock) {

            armorCount++;

            lock = true;

        }

    }

    return `Gladiator expenses: ${((helmetCount * helmetPrice) + (swordCount * swordPrice) + (shieldCount * shieldPrice) + (armorCount * armorPrice)).toFixed(2)} aureus`;

}

console.log(solve(7, 2, 3, 4, 5)); // Gladiator expenses: 16.00 aureus