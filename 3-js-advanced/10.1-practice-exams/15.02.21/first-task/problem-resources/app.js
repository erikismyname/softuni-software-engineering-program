function solution() {

    const elmnts = getDOMElements();

    attachEvntListnr();

    function getDOMElements() {

        const inputElGiftNm = document.querySelector('input');

        const [ulElList, ulSecSent, ulSecDisc] = Array.from(document.querySelectorAll('ul'));

        return {

            inputElGiftNm,

            ulElList,

            ulSecSent,

            ulSecDisc,

        };

    }

    function attachEvntListnr() {

        document.querySelector('button').addEventListener('click', onAdd);

    }

    function onAdd() {

        appendChildren(elmnts.ulElList,
            appendChildren(createElement('li', elmnts.inputElGiftNm.value, { className: 'gift' }), createElement('button', 'Send', { id: 'sendButton', onClick: onSend }), createElement('button', 'Discard', { id: 'discardButton', onClick: onDiscard }))
        );

        sortLiElmnts(elmnts.ulElList);

        elmnts.inputElGiftNm.value = '';

    }

    function createElement(type, content, attributes) {

        const el = document.createElement(type);

        if (content) {

            el.textContent = content;

        }

        if (attributes) {

            Object.entries(attributes).forEach(([k, v]) => {

                k.slice(0, 2) == 'on' ? el.addEventListener('click', v) : el[k] = v;

            });

        }

        return el;

    }

    function appendChildren(parent, ...children) {

        children.forEach(e => parent.appendChild(e));

        return parent;

    }

    function onSend(ev) {

        const liEl = ev.target.parentNode;

        ev.target.nextElementSibling.remove();

        ev.target.remove();

        elmnts.ulSecSent.appendChild(liEl);

    }

    function onDiscard(ev) {

        const liEl = ev.target.parentNode;

        ev.target.previousElementSibling.remove();

        ev.target.remove();

        elmnts.ulSecDisc.appendChild(liEl);

    }

    function sortLiElmnts(parentUl) {

        Array.from(parentUl.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(e => parentUl.appendChild(e));

    }

}