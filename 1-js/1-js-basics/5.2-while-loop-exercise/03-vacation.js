function solve(arr) {

    let neededMoney = Number(arr.shift());

    let currentMoney = Number(arr.shift());

    let action = arr.shift();

    let actionSum = Number(arr.shift());

    let counter = 0;

    let isFive = false;

    let days = 0;

    while (currentMoney < neededMoney) {

        if (action == 'spend') {

            currentMoney - actionSum < 0 ? currentMoney = 0 : currentMoney -= actionSum;

            counter++;

            if (counter == 5) {

                isFive = true;

                break;

            }

        } else {

            currentMoney += actionSum;

            counter = 0;

        }

        action = arr.shift();

        actionSum = Number(arr.shift());

        days++;

    }

    return isFive ? `You can't save the money.\n${days + 1}` : `You saved the money for ${days} days.`;

}

console.log(solve(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
);