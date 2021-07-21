function solve([students, lectures, bonus, ...arr]) {

    let maxBonus = 0;

    let attendances = 0;

    arr.forEach(el => {

        let currentBonus = Number(el) / Number(lectures) * (5 + Number(bonus));

        if (currentBonus > maxBonus) {

            maxBonus = currentBonus;

            attendances = el;

        }

    });

    return `Max Bonus: ${Math.ceil(maxBonus)}.\nThe student has attended ${attendances} lectures.`;

}

console.log(solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
));