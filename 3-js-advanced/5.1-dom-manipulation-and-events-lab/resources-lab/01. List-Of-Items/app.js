function addItem() {

    const inputEl = document.getElementById('newItemText');

    if (inputEl.value) {

        const liEl = createLiElement(inputEl.value);

        document.getElementById('items').appendChild(liEl);

        inputEl.value = '';

    }

    function createLiElement(content) {

        const liEl = document.createElement('li');

        liEl.textContent = content;

        return liEl;

    }

}