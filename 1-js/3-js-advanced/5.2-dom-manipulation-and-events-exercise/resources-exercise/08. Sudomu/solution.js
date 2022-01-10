function solve() {

    const tableEl = document.querySelector('table');

    const inputElmnts = Array.from(document.querySelectorAll('input'));

    const outputParEl = document.querySelector('#check p');

    const [checkBtn, clearBtn] = document.querySelectorAll('button');

    checkBtn.addEventListener('click', onCheck);

    clearBtn.addEventListener('click', onClear);

    function onCheck() {

        const sudokuMatrix = [];

        for (let i = 0; i < inputElmnts.length; i += 3) {

            sudokuMatrix.push(inputElmnts.slice(i, i + 3).map(e => e.value));

        }

        if (validateSudoku(sudokuMatrix)) {

            tableEl.style.border = '2px solid green';

            outputParEl.textContent = 'You solve it! Congratulations!';

            outputParEl.style.color = 'green';

        } else {

            tableEl.style.border = '2px solid red';

            outputParEl.textContent = 'NOP! You are not done yet...';

            outputParEl.style.color = 'red';

        }

    }

    function onClear() {

        inputElmnts.forEach(e => e.value = '');

        tableEl.style.border = '';

        outputParEl.textContent = '';

    }

    function validateSudoku(matrix) {

        let isValid = true;

        for (let i = 0; i < matrix.length; i++) {

            let currentRow = matrix[i];

            let currentCol = matrix.map(r => r[i]);

            console.log(currentCol);

            if (checkCondition(currentRow, currentCol)) {

                isValid = false;

                break;

            }

        }

        return isValid;

    }

    function checkCondition(rowArr, colArr) {

        return rowArr.length != new Set(rowArr).size || colArr.length != new Set(colArr).size;

    }

}