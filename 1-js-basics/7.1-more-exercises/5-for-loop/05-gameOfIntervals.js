function solve(arr) {

    let moves = Number(arr.shift());

    let result = 0;

    let groupOne = 0;

    let groupTwo = 0;

    let groupThree = 0;

    let groupFour = 0;

    let groupFive = 0;

    let invalidGroup = 0;

    for (let a = 0; a < arr.length; a++) {

        let current = Number(arr[a]);

        if (current >= 0 && current <= 9) {

            result += (current * 0.20);

            groupOne++;

        } else if (current >= 10 && current <= 19) {

            result += (current * 0.30);

            groupTwo++;

        } else if (current >= 20 && current <= 29) {

            result += (current * 0.40);

            groupThree++;

        } else if (current >= 30 && current <= 39) {

            result += 50;

            groupFour++;

        } else if (current >= 40 && current <= 50) {

            result += 100;

            groupFive++;

        } else {

            result /= 2;

            invalidGroup++;

        }

    }

    return `${result.toFixed(2)}\nFrom 0 to 9: ${((groupOne / moves) * 100).toFixed(2)}%\nFrom 10 to 19: ${((groupTwo / moves) * 100).toFixed(2)}%\nFrom 20 to 29: ${((groupThree / moves) * 100).toFixed(2)}%\nFrom 30 to 39: ${((groupFour / moves) * 100).toFixed(2)}%\nFrom 40 to 50: ${((groupFive / moves) * 100).toFixed(2)}%\nInvalid numbers: ${((invalidGroup / moves) * 100).toFixed(2)}%`;

}

console.log(solve([ '3', '12', '-23', '46' ]));