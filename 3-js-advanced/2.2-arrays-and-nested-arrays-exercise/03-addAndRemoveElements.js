function solve(arr) {

    const result = [];

    let num = 1;

    arr.forEach(e => {

        e == 'add' ? result.push(num) : result.pop(num);
        
        num++;

    });

    return result.length ? result.join('\n') : 'Empty';

}