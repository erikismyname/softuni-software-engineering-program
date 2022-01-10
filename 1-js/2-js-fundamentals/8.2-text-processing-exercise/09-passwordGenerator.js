function solve([firstStr, secondStr, thirdStr]) {

    let arr = [...firstStr + secondStr];

    let index = 0;

    let current = thirdStr[index];

    arr.forEach(el => {

        if (el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u') {

            let char = current.toUpperCase();

            arr.splice(arr.indexOf(el), 1, char);

            index++;

            if (index == thirdStr.length) {

                index = 0;

            }

            current = thirdStr[index];

        }

    });

    return `Your generated password is ${arr.reverse().join('')}`;

}

console.log(solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
    
));