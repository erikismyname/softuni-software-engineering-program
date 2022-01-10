function solve(name, lastName, hairColor) {

    return JSON.stringify({ name, lastName, hairColor });

}

console.log(solve('George', 'Jones', 'Brown')); // {"name":"George","lastName":"Jones","hairColor":"Brown"}