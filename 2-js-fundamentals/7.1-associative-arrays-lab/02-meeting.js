function solve(arr) {

    let data = {};

    let result = [];

    arr.forEach(el => {

        let [day, name] = el.split(' ');

        if (!data[day]) {

            data[day] = name;

            result.push(`Scheduled for ${day}`);

        } else {

            result.push(`Conflict on ${day}!`);

        }

    });

    return `${result.join('\n')}\n${Object.entries(data).map(el => `${el[0]} -> ${el[1]}`).join('\n')}`;

}

console.log(solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
));
/*
Scheduled for Monday
Scheduled for Wednesday
Conflict on Monday!
Scheduled for Friday
Monday -> Peter
Wednesday -> Bill
Friday -> Tim
*/