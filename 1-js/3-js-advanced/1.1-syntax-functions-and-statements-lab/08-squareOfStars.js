function solve(count = 5) {

    const result = [];

    const row = '* '.repeat(count);

    for (let a = 0; a < count; a++) {

        result.push(row);

    }

    return result.join('\n');
    
}