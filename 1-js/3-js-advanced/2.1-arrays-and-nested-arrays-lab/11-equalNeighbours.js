function solve(matrix) {

    let count = 0;

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {

            let currentRowEl = matrix[i][j];

            let currentRowNextEl = j + 1 != matrix[i].length ? matrix[i][j + 1] : null;

            let nextRowEl = i != matrix.length - 1 ? matrix[i + 1][j] : null;

            if (currentRowEl == currentRowNextEl || currentRowEl == nextRowEl) {

                currentRowEl == currentRowNextEl && currentRowEl == nextRowEl ? count += 2 : count++;

            }

        }

    }

    return count;

}