function solve(arr) {

    let [fruit, size, num] = arr.map(el => isNaN(el) ? el : Number(el));

    let data = {

        watermelon: { small: 56 * 2, big: 28.70 * 5 },

        mango: { small: 36.66 * 2, big: 19.60 * 5 },

        pineapple: { small: 42.10 * 2, big: 24.80 * 5 },

        raspberry: { small: 20 * 2, big: 15.20 * 5 }

    };

    let total = data[fruit.toLowerCase()][size] * num;

    if (total >= 400 && total <= 1000) {

        total *= 0.85;

    }

    return total > 1000 ? `${(total /= 2).toFixed(2)} lv.` : `${total.toFixed(2)} lv.`;

}

console.log(solve(['Watermelon', 'big', '4']));

console.log(solve(['Pineapple', 'small', '1']));

console.log(solve(['Raspberry', 'small', '50']));

console.log(solve(['Mango', 'big', '8']));