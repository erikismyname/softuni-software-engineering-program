function solve(str) {

    let result = [];

    if (!checkLength(str)) {

        result.push('Password must be between 6 and 10 characters');

    }

    if (!checkContent(str)) {

        result.push('Password must consist only of letters and digits');

    }

    if (!checkDigits(str)) {

        result.push('Password must have at least 2 digits');

    }

    return result.length ? result.join('\n') : 'Password is valid';

    function checkDigits(str) {

        let counter = 0;

        str.split('').forEach(el => {

            if (el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {

                counter++;

            }

        });

        return counter < 2 ? false : true;

    }

    function checkContent(str) {

        isValid = true;

        str.split('').forEach(el => {

            let current = el.charCodeAt(0);

            if (!(current >= 48 && current <= 57 || current >= 65 && current <= 90 || current >= 97 && current <= 122)) {

                isValid = false;

            }

        });

        return isValid;

    }

    function checkLength(str) {

        return str.length >= 6 && str.length <= 10;

    }

}

console.log(solve('Pa$s$s')); // Password must be between 6 and 10 characters 