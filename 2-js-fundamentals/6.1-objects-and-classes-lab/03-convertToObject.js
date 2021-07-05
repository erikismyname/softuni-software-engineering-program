function solve(json) {

    let result = [];

    Object.entries(JSON.parse(json)).map(el => {

        result.push(`${el[0]}: ${el[1]}`);

    });

    return result.join('\n');

}

console.log(solve('{"name": "George", "age": 40, "town": "Sofia"}'));
/*
name: George
age: 40
town: Sofia
*/