function solve(arr) {

    let data = {};

    let result = [];

    arr.forEach(el => {

        let [sys, com, subcom] = el.split(' | ');

        if (!data[sys]) {

            data[sys] = {};

        }

        if (!data[sys][com]) {

            data[sys][com] = [];

        }

        data[sys][com].push(subcom);

    });

    Object.entries(data).sort((a, b) => {

        return Object.entries(b[1]).length - Object.entries(a[1]).length || a[0].localeCompare(b[0]);

    }).forEach(el => {

        result.push(el[0]);

        Object.entries(el[1]).sort((a, b) => b[1].length - a[1].length).forEach(el => {

            result.push(`|||${el[0]}`);

            el[1].forEach(el => {

                result.push(`||||||${el}`);

            });

        });

    });

    return result.join('\n');

}

console.log(solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]));
/*
Lambda
|||CoreA
||||||A23
||||||A24
||||||A25
|||CoreB
||||||B24
|||CoreC
||||||C4
SULS
|||Main Site
||||||Home Page
||||||Login Page
||||||Register Page
|||Judge Site
||||||Login Page
||||||Submittion Page
|||Digital Site
||||||Login Page
Indice
|||Session
||||||Default Storage
||||||Default Security
*/