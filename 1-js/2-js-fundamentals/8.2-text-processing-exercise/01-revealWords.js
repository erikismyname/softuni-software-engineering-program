function solve(temp, text) {

    text.split(' ').forEach(el => {

        if (el.includes('*')) {

            text = text.replace(el, temp.split(', ').filter(e => e.length == el.length)[0]);

        }

    });

    return text;

}

console.log(solve('great',
'softuni is ***** place for learning new programming languages'
));