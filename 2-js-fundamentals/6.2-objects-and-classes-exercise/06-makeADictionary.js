function solve(jsonArr) {

    let data = {};

    let arr = jsonArr.map(el => JSON.parse(el));

    arr.map(el => Object.entries(el)).forEach(el => data[el[0][0]] = el[0][1]);

    return Object.entries(data).sort((a, b) => a[0].localeCompare(b[0])).map(el => `Term: ${el[0]} => Definition: ${el[1]}`).join('\n');

}

console.log(solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
));
/*
Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.
*/