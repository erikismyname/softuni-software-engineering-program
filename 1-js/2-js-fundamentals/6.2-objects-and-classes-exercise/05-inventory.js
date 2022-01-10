function solve(arr) {

    let result = [];

    arr.forEach(el => {

        let [name, lvl, items] = el.split(' / ');

        lvl = Number(lvl);

        items = items.split(', ').sort().join(', ');

        result.push({ name, lvl, items });

    });

    result.sort((a, b) => a.lvl - b.lvl).forEach(el => console.log(`Hero: ${el.name}\nlevel => ${el.lvl}\nitems => ${el.items}`));

}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
/*
Hero: Hes
level => 1
items => Antara, Desolator, Sentinel
Hero: Derek
level => 12
items => BarrelVest, DestructionSword
Hero: Isacc
level => 25
items => Apple, GravityGun
*/