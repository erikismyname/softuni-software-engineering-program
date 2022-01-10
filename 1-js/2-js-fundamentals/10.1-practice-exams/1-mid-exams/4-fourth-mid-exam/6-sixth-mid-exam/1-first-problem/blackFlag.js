function solve(arr) {

    let [days, daily, expected] = arr.map(Number);

    let total = 0;

    for (let a = 1; a <= days; a++) {

        total += daily;

        if (a % 3 == 0) {

            total += (daily / 2);

        }

        if (a % 5 == 0) {

            total -= (total * 0.30);

        }

    }

    return total >= expected ? `Ahoy! ${total.toFixed(2)} plunder gained.` : `Collected only ${((total / expected) * 100).toFixed(2)}% of the plunder.`;

}

console.log(solve(['5', '40', '100']));

console.log(solve(['10', '20', '380']));