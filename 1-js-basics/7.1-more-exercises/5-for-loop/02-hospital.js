function solve(arr) {

    let days = Number(arr.shift());

    let treated = 0;

    let untreated = 0;

    let doctors = 7;

    for (let a = 1; a <= days; a++) {

        if (a % 3 == 0) {

            if (treated < untreated) {

                doctors++;

            }

        }

        let current = Number(arr[a - 1]);

        if (current <= doctors) {

            treated += current;

            untreated += 0;

        } else {

            treated += doctors;

            untreated += (current - doctors);

        }

    }

    return `Treated patients: ${treated}.\nUntreated patients: ${untreated}.`;

}

console.log(solve(['4', '7', '27', '9', '1']));
console.log(solve(['6', '25', '25', '25', '25', '25', '2']));
console.log(solve(['3', '7', '7', '7']));
