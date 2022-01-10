function solve([name, projects]) {

    return `The architect ${name} will need ${Number(projects) * 3} hours to complete ${projects} project/s.`;

}

console.log(solve(['George', '4'])); // The architect George will need 12 hours to complete 4 project/s.

console.log(solve(['Sanya', '9'])); // The architect Sanya will need 27 hours to complete 9 project/s.