function solve([str, type, ...rest]) {

    return `The total sum is: ${type == 'UPPERCASE' ? [...str].filter(el => el == el.toUpperCase()).filter(el => el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90 || el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122).map(el => el.charCodeAt(0)).reduce((acc, c) => acc + c, 0) : [...str].filter(el => el == el.toLowerCase()).filter(el => el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90 || el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122).map(el => el.charCodeAt(0)).reduce((acc, c) => acc + c, 0)}`;

}

console.log(solve(['HelloFromMyAwesomePROGRAM', 'LOWERCASE', '']));