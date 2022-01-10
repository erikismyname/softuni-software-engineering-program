function solve(arr) {

    let jury = Number(arr.shift());

    let result = [];

    let theme = arr.shift();

    let grades = 0;

    let gradesAll = [];

    while (true) {

        for (let a = 0; a < jury; a++) {

            let current = Number(arr.shift());

            grades += current;

            gradesAll.push(current);
    
        }
    
        result.push(`${theme} - ${(grades / jury).toFixed(2)}.`);

        grades = 0;
        
        theme = arr.shift();

        if (theme == 'Finish') {

            break;

        } 

    }

    return `${result.join('\n')}\nStudent's final assessment is ${(gradesAll.reduce((acc, c, i, a) => acc + c / a.length, 0)).toFixed(2)}.`;

}

console.log(solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


);