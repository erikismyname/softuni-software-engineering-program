function solve(matrix) {

    const sumRowNums = (arr) => arr.reduce((acc, c) => acc + c, 0);

    const tempSum = sumRowNums(matrix[0]);

    for (let i = 0; i < matrix.length; i++) {

        let rowSum = sumRowNums(matrix[i]);

        let colSum = 0;

        for (let j = 0; j < matrix.length; j++) {

            colSum += matrix[j][i];

        }

        if (rowSum != tempSum || colSum != tempSum) {

            return false;

        }

    }

    return true;

}