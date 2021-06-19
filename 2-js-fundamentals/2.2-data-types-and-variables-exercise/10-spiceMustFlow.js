function solve(num) {

    let totalSpice = 0;

    let days = 0;

    while (num >= 100) {

        totalSpice += num;

        num -= 10;

        totalSpice -= 26;

        days++;

    }

    return `${days}\n${totalSpice - 26 < 0 ? totalSpice = 0 : totalSpice -= 26}`;

}

console.log(solve(111)); // 2
// 134