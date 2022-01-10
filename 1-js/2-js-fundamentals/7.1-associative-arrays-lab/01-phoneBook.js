function solve(arr) {

    let data = {};

    arr.forEach(el => {

        let [name, phone] = el.split(' ');

        data[name] = phone;

    });

    return Object.entries(data).map(el => `${el[0]} -> ${el[1]}`).join('\n');

}

console.log(solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
));
/*
Tim -> 0876566344
Peter -> 0877547887
Bill -> 0896543112
*/