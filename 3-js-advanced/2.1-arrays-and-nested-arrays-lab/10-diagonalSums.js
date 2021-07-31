function solve(matrix) {

    let mainDiag = 0;

    let secDiag = 0;

    for (let i = 0; i < matrix.length; i++) {

        mainDiag += matrix[i][i];

        secDiag += matrix[i][matrix.length - 1 - i];

    }

    return `${mainDiag} ${secDiag}`;

}