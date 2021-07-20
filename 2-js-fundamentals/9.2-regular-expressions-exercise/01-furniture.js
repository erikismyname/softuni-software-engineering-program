function solve(arr) {

    let result = ['Bought furniture:'];

    let sum = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;

    let match = pattern.exec(arr);

    while (match) {

        result.push(match.groups.name);

        sum += (Number(match.groups.price) * Number(match.groups.quantity));

        match = pattern.exec(arr);

    }

    return `${result.join('\n')}\nTotal money spend: ${sum.toFixed(2)}`; 

}

console.log(solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']));