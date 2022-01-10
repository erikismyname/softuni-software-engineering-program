function solve(arr) {

    let allowedPoorGrades = Number(arr.shift());

    let gradesAvg = 0;

    let totalTasks = 0;

    let lastTask = '';

    let poorGradesCounter = 0;

    let currentTask = arr.shift();

    let currentGrade = Number(arr.shift());

    let isEnough = false;

    while (poorGradesCounter < allowedPoorGrades) {

        if (currentTask == 'Enough') {

            isEnough = true;

            break;

        }

        if (currentGrade <= 4) {

            poorGradesCounter++;

        }

        gradesAvg += currentGrade;

        totalTasks++;

        lastTask = currentTask;

        currentTask = arr.shift();

        currentGrade = Number(arr.shift());

    }

    return isEnough ? `Average score: ${(gradesAvg / totalTasks).toFixed(2)}\nNumber of problems: ${totalTasks}\nLast problem: ${lastTask}` : `You need a break, ${poorGradesCounter} poor grades.`;

}

console.log(solve((["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
));