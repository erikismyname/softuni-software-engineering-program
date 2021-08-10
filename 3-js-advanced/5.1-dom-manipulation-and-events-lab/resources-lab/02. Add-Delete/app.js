function addItem() {

    const inputEl = document.getElementById('newItemText');

    const ulEl = document.getElementById('items');

    const liEl = createEl('li', inputEl.value);

    const aEl = createEl('a', '[Delete]');

    liEl.appendChild(aEl);

    ulEl.appendChild(liEl);

    inputEl.value = '';

    function createEl(type, content) {

        const el = document.createElement(type);

        el.textContent = content;

        if (type == 'a') {

            el.setAttribute('href', '#');

            el.addEventListener('click', (ev) => {

                ev.target.parentNode.remove();

            });

        }

        return el;

    }

}