function solve(temp, text) {

    return text.split(' ').filter(el => el.toLowerCase() == temp.toLowerCase()).length ? temp : `${temp} not found!`;

}

console.log(solve('javascript',
    'JavaScript is the best programming language'
));