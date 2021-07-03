function solve(arr, [bomb, power]) {

    while (arr.includes(bomb)) {

        if (arr.indexOf(bomb) - power >= 0) {

            arr.splice(arr.indexOf(bomb) - power, (power * 2) + 1);

        } else {

            let result = arr.slice(arr.indexOf(bomb) + 1);

            result.splice(0, power);

            arr = result;

        }

    }

    return arr.reduce((acc, c) => acc + c, 0);

}

console.log(solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)); // 12