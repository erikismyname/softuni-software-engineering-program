function solve(num) {

    num = num.toString().split('').map(Number);

    while (getAvg(num) <= 5) {

        num.push(9);

    }

    return num.join('');

    function getAvg(arr) {

        return arr.reduce((acc, c, i, arr) => {

            acc += c;

            if (i == arr.length - 1) {

                return acc / arr.length;

            }

            return acc;

        });

    }

}

console.log(solve(5835)); // 1019999