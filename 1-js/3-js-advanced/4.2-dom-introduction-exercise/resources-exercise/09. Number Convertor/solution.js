function solve() {

    const inputEl = document.getElementById('input');

    const selectEl = document.getElementById('selectMenuTo');

    const binaryOptionEl = createOption('option', 'binary', 'Binary');

    const hexOptionEl = createOption('option', 'hexadecimal', 'Hexadecimal');

    appendOptions(selectEl, binaryOptionEl, hexOptionEl);

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {

        document.getElementById('result').value = controller(selectEl.selectedIndex);

        inputEl.value = '';

    }

    function createOption(type, value, textContetnt) {

        const el = document.createElement(type);

        el.value = value;

        el.text = textContetnt;

        return el;

    }

    function appendOptions(parent, ...children) {

        children.forEach(c => parent.add(c));

    }

    function decimalToBinary(str) {

        return Number(str).toString(2);

    }

    function decimalToHex(str) {

        return Number(str).toString(16).toUpperCase();

    }

    function controller(idx) {

        if (idx == 1) {

            return decimalToBinary(inputEl.value);

        } else if (idx == 2) {

            return decimalToHex(inputEl.value);

        }

    }

}