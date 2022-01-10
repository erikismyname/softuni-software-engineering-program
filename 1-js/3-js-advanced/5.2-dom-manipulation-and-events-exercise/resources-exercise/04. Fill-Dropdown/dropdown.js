function addItem() {

    const selectEl = document.getElementById('menu');

    const inputText = document.getElementById('newItemText');

    const inputValue = document.getElementById('newItemValue');

    if (inputText.value && inputValue.value) {

        const optionEl = createOption(inputText.value, inputValue.value);

        selectEl.add(optionEl);

        inputText.value = '';

        inputValue.value = '';

    }

    function createOption(content, value) {

        const el = document.createElement('option');

        el.textContent = content;

        el.value = value;

        return el;

    }

}