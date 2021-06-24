function solve(arr) {

    let result = [];

    for (let a = 0; a < arr.length - 1; a++) {

        let current = [arr[a]];

        for (let b = a + 1; b < arr.length; b++) {

            if (arr[a] == arr[b]) {

                current.push(arr[b]);

            } else {

                break;

            }

        }

        if (result.length < current.length) {

            result = current;

        }

    }

    return result.join(' ');
    
}

console.log(solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])); // 2 2 2