function solve(text) {

    let result = [];

    text.split(' ').forEach(el => {

        if (el[0] == '#' && el.length > 1) {

            let isValid = true;

            el.split('').slice(1).forEach(w => {

                let current = w.charCodeAt(0);

                if (!(current >= 65 && current <= 90 || current >= 97 && current <= 122)) {

                    isValid = false;

                }

            });

            if (isValid) {

                result.push(el.slice(1));

            }

        }

    });

    return result.join('\n');

}

console.log(solve('Nowadays everyone uses # to tag a #special w in #socialMedia'));