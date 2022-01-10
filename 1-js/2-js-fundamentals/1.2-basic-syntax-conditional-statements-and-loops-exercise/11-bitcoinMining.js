function solve(arr) {

    let firstBuy = 0;

    let day = 1;

    let money = 0;

    let bitcoin = 0;

    for (let a = 0; a < arr.length; a++) {

        if (day % 3 == 0) {

            money += (arr[a] * 0.70) * 67.51;

        } else {

            money += arr[a] * 67.51;

        }

        while(money >= 11949.16) {

            if (bitcoin == 0) {

                firstBuy = day;

            }

            bitcoin++;

            money -= 11949.16;

        }

        day++;

    }

    return bitcoin == 0 ? `Bought bitcoins: ${bitcoin}\nLeft money: ${money.toFixed(2)} lv.` : `Bought bitcoins: ${bitcoin}\nDay of the first purchased bitcoin: ${firstBuy}\nLeft money: ${money.toFixed(2)} lv.`;

}

console.log(solve([100, 200, 300])); // Bought bitcoins: 2
// Day of the first purchased bitcoin: 2
// Left money: 10531.78 lv.