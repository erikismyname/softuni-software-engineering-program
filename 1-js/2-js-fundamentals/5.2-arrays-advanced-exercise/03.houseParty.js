function solve(arr) {

    let guests = [];

    let result = [];

    arr.forEach(el => {

        let [name] = el.split(' ');

        if (el.includes('not')) {

            guests.includes(name) ? guests.splice(guests.indexOf(name), 1) : result.push(`${name} is not in the list!`);

        } else {

            guests.includes(name) ? result.push(`${name} is already in the list!`) : guests.push(name);

        }

    });

    return result.concat(guests).join('\n');

}

console.log(solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)); // John is not in the list!
// Allie