function solve(num) {

    let sum = 0;

    [...num.toString()].forEach(el => {

        sum += Number(el);

    });

    return sum.toString().includes('9') ? `${num} Amazing? True` : `${num} Amazing? False`;

}

console.log(solve(1233)); // 1233 Amazing? True

console.log(solve(999)); // 999 Amazing? False