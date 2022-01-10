function solve() {

    function getDOMElements() {

        const inputElTask = document.querySelector('#task');

        const textAreaDesc = document.querySelector('#description');

        const inputElDate = document.querySelector('#date');

        const [secElOpen, secElProg, secElCompl] = Array.from(document.querySelectorAll('section')).slice(1);

        const divElOpen = secElOpen.children[1];

        const divElProg = secElProg.children[1];

        const divElComp = secElCompl.children[1];

        document.querySelector('#add').addEventListener('click', onAdd);

        return {

            inputElTask,

            textAreaDesc,

            inputElDate,

            divElOpen,

            divElProg,

            divElComp,

        };

    }

    const elmnts = getDOMElements();

    function onAdd(ev) {

        ev.preventDefault();

        if (validateInput(elmnts.inputElTask.value, elmnts.textAreaDesc.value, elmnts.inputElDate.value)) {

            appendChildren(elmnts.divElOpen,
                appendChildren(createElement('article'), createElement('h3', elmnts.inputElTask.value), createElement('p', `Description: ${elmnts.textAreaDesc.value}`), createElement('p', `Due Date: ${elmnts.inputElDate.value}`),
                    appendChildren(createElement('div', '', { className: 'flex' }), createElement('button', 'Start', { className: 'green', onClick: onStart }), createElement('button', 'Delete', { className: 'red', onClick: onDelete }))));

            elmnts.inputElTask.value = '';

            elmnts.textAreaDesc.value = '';

            elmnts.inputElDate.value = '';

        }

    }

    function onStart(ev) {

        const articleElCurr = ev.target.parentElement.parentElement;

        const buttonElFin = createElement('button', 'Finish', { className: 'orange', onClick: onFinish });

        const buttonElSibl = ev.target.nextElementSibling;

        buttonElSibl.parentElement.replaceChild(buttonElFin, buttonElSibl);

        ev.target.parentElement.replaceChild(buttonElSibl, ev.target);

        elmnts.divElProg.appendChild(articleElCurr);

    }

    function onDelete(ev) {

        ev.target.parentElement.parentElement.remove();

    }

    function onFinish(ev) {

        const articleElCurr = ev.target.parentElement.parentElement;

        ev.target.parentElement.remove();

        elmnts.divElComp.appendChild(articleElCurr);

    }

    function validateInput(name, description, date) {

        return name && description && date;

    }

    function appendChildren(parent, ...children) {

        children.forEach(e => parent.appendChild(e));

        return parent;

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

}