function solve(arr) {

    let [sum, gender, age, sport] = arr.map(el => isNaN(el) ? el : Number(el));

    let data = {

        gym: { m: 42, f: 35 },

        boxing: { m: 41, f: 37 },

        yoga: { m: 45, f: 42 },

        zumba: { m: 34, f: 31 },

        dances: { m: 51, f: 53 },

        pilates: { m: 39, f: 37 }

    };

    let total = data[sport.toLowerCase()][gender];

    if (age <= 19) {

        total *= 0.80;

    }

    return total < sum ? `You purchased a 1 month pass for ${sport}.` : `You don't have enough money! You need $${(total - sum).toFixed(2)} more.`;

}

console.log(solve(['50', 'm', '23', 'Gym']));

console.log(solve(['20', 'f', '15', 'Yoga']));

console.log(solve(['10', 'm', '50', 'Pilates']));