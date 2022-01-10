function solve([text, tempArr]) {

    text.split(' ').forEach(el => {

        let current = tempArr.filter(e => e.length == [...el].filter(el => el == '_').length)[0];

        if (el.includes('_') && current) {

            text = text.replace(el, current + [...el].filter(el => el != '_').join(''));

        }

    });

    return text;

}

console.log(solve(['Hi, grandma! I\'m so ____,,,,, to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
));