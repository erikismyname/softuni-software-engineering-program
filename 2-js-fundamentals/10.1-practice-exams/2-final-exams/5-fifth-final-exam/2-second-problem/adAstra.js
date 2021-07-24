function solve([str]) {

    let result = [];

    let total = 0;

    let pattern = /(\||#)(?<name>[A-Za-z]+ ?[A-Za-z]+)(\1)(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{2})(\1)(?<calories>\d{1,5})(\1)/g;

    let match = pattern.exec(str);

    while (match) {

        result.push(`Item: ${match.groups.name}, Best before: ${match.groups.day}/${match.groups.month}/${match.groups.year}, Nutrition: ${match.groups.calories}`);

        total += Number(match.groups.calories);

        match = pattern.exec(str);

    }

    return `You have food to last you for: ${Math.trunc(total / 2000)} days!\n${result.join('\n')}`;

}

console.log(solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]));

console.log(solve([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]));