function solve(num) {

    let result = [];

    for (let a = 1; a <= num; a++) {
    
        let row = '';
        
        for (let b = 1; b <= a; b++) {

            row += a + ' ';

        }

        result.push(row);

    }

    return result.join('\n')

}

console.log(solve(3)); // 1
// 2 2
// 3 3 3