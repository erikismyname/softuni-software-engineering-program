function solve([text, num]) {

    num = Number(num);

    text = text.toLowerCase();

    if (text == 'diesel') {

        return num >= 25 ? `You have enough ${text}.` : `Fill your tank with ${text}!`;

    } else if (text == 'gasoline') {

        return num >= 25 ? `You have enough ${text}.` : `Fill your tank with ${text}!`;

    } else if (text == 'gas') {

        return num >= 25 ? `You have enough ${text}.` : `Fill your tank with ${text}!`;

    } else {

        return 'Invalid fuel!';

    }

}

console.log(solve(['Diesel', '10']));
console.log(solve(['Gasoline', '40']));
console.log(solve(['Gas', '25']));
console.log(solve(['Kerosene', '200']));