function solve(num, ...names) {

    num = Number(num);

    const result = [];

    const operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.80
    };

    names.forEach(e => {

        num = operations[e](num);

        result.push(num);

    });

    return result.join('\n');

}