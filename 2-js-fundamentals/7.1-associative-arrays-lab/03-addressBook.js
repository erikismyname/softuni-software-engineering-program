function solve(arr) {

    let data = {};

    arr.forEach(el => {

        let [name, address] = el.split(':');

        data[name] = address;

    });

    return Object.entries(data).sort((a, b) => a[0].localeCompare(b[0])).map(el => `${el[0]} -> ${el[1]}`).join('\n');

}

console.log(solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
));
/*
Bill -> Ornery Rd
Peter -> Carlyle Ave
Tim -> Doe Crossing
*/