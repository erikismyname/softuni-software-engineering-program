function solve(num) {

    let result = [];

    for (let a = 1; a <= num; a++) {
    
        let sum = 0;
        
        [...a.toString()].forEach(el => {

            sum += Number(el);

        });

        sum == 5 || sum == 7 || sum == 11 ? result.push(`${a} -> True`) : result.push(`${a} -> False`);

    }

    return result.join('\n')

}

console.log(solve(5)); // 1 -> False
// ...
// 5 -> True