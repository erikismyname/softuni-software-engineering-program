function solve() {

    const [inputElName, inputElHall, inputElPrice, btnElOnScr] = Array.from(document.querySelector('#container').children);

    const ulElMovies = document.querySelector('#movies > ul');

    const ulElArchive = document.querySelector('#archive > ul');

    document.querySelector('#archive > button').addEventListener('click', onClear);

    btnElOnScr.addEventListener('click', onScreenHandler);

    function onScreenHandler(ev) {

        ev.preventDefault();

        if (validateInput(inputElName.value, inputElHall.value, inputElPrice.value)) {

            const liEl = appendChildren(createElement('li'), createElement('span', `${inputElName.value}`), createElement('strong', `Hall: ${inputElHall.value}`));

            const divEl = appendChildren(createElement('div'), createElement('strong', `${Number(inputElPrice.value).toFixed(2)}`), createElement('input', '', 'Tickets Sold'), createElement('button', 'Archive'));

            appendChildren(ulElMovies, appendChildren(liEl, divEl));

            inputElName.value = '';

            inputElHall.value = '';

            inputElPrice.value = '';

        }

    }

    function onArchive(ev) {

        const price = Number(ev.target.previousElementSibling.previousElementSibling.textContent);

        const tickets = Number(ev.target.previousElementSibling.value)

        if (tickets) {

            const liEl = ev.target.parentElement.parentElement;

            const divEl = ev.target.parentElement;

            const btnEl = createElement('button', 'Delete');

            divEl.parentElement.replaceChild(btnEl, divEl);

            btnEl.previousElementSibling.textContent = `Total amount: ${(price * tickets).toFixed(2)}`;

            ulElArchive.appendChild(liEl);

        }

    }

    function onDelete(ev) {

        ev.target.parentElement.remove();

    }

    function onClear() {

        Array.from(ulElArchive.children).forEach(c => c.remove());

    }

    function validateInput(name, hall, price) {

        return name && hall && Number(price);

    }

    function createElement(type, content, placeholder) {

        const el = document.createElement(type);

        if (content) {

            el.textContent = content;

            if (content == 'Archive') {

                el.addEventListener('click', onArchive);

            } else if (content == 'Delete') {

                el.addEventListener('click', onDelete);

            }

        }

        if (placeholder) {

            el.setAttribute('placeholder', 'Tickets Sold');

        }

        return el;

    }

    function appendChildren(parent, ...children) {

        children.forEach(c => parent.appendChild(c));

        return parent;

    }

}