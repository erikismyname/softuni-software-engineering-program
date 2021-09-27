function solution() {

    const inputEl = document.querySelector('input');

    const [ulElList, ulElSent, ulElDisc] = Array.from(document.querySelectorAll('ul'));

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {

        appendChildren(ulElList, appendChildren(createElement('li', inputEl.value, { className: 'gift' }), createElement('button', 'Send', { id: 'sendButton', onClick: onSent }), createElement('button', 'Discard', { id: 'discardButton', onClick: onDiscard })));

        sortLiElmnts(ulElList);

        inputEl.value = '';

    }

    function onDiscard(ev) {

        const liEl = ev.target.parentElement;

        Array.from(liEl.children).forEach(e => e.remove());

        ulElDisc.appendChild(liEl);

    }

    function onSent(ev) {

        const liEl = ev.target.parentElement;

        Array.from(liEl.children).forEach(e => e.remove());

        ulElSent.appendChild(liEl);

    }

    function sortLiElmnts(parentEl) {

        const sortedLiElmnts = Array.from(parentEl.children).sort((a, b) => a.firstChild.data.localeCompare(b.firstChild.data));

        sortedLiElmnts.forEach(e => parentEl.appendChild(e));

    }

    function createElement(type, content, attr) {

        const el = document.createElement(type);

        el.textContent = content;

        Object.entries(attr).forEach(([k, v]) => {

            k.slice(0, 2) == 'on' ? el.addEventListener('click', v) : el[k] = v;

        });

        return el;

    }

    function appendChildren(parent, ...children) {

        children.forEach(e => parent.appendChild(e));

        return parent;

    }

}