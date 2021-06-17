function solve(num) {

    let sum = 0;

    [...num.toString()].forEach(el => {

        sum += Number(el);

    });

    return sum;

}

console.log(solve(543)); // 12