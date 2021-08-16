function solve() {

    const inputElTask = document.querySelector('#task');

    const textAreaDesc = document.querySelector('#description');

    const inputElDate = document.querySelector('#date');

    const [orangeSecEl, yellowSecEl, greenSecEl] = Array.from(document.querySelectorAll('section')).slice(1);

    const orangeDivEl = orangeSecEl.children[1];

    const yellowDivEl = yellowSecEl.children[1];

    const greenDivEl = greenSecEl.children[1];

    console.log(orangeSecEl, yellowSecEl, greenSecEl);

    document.querySelector('#add').addEventListener('click', onAdd);

    function onAdd(ev) {

        ev.preventDefault();

        if (validateInput(inputElTask.value, textAreaDesc.value, inputElDate.value)) {

            const articleEl = appendChildren(createElement('article'), createElement('h3', inputElTask.value), createElement('p', `Description: ${textAreaDesc.value}`), createElement('p', `Due Date: ${inputElDate.value}`));

            const divEl = appendChildren(createElement('div', '', 'flex'), createElement('button', 'Start', 'green'), createElement('button', 'Delete', 'red'));

            appendChildren(orangeDivEl, appendChildren(articleEl, divEl));

        }

    }

    function onStart(ev) {

        const articleEl = ev.target.parentElement.parentElement;

        yellowDivEl.appendChild(articleEl);

        ev.target.parentElement.remove();

        appendChildren(articleEl, appendChildren(createElement('div', '', 'flex'), createElement('button', 'Delete', 'red'), createElement('button', 'Finish', 'orange')));

    }

    function onDelete(ev) {

        ev.target.parentElement.parentElement.remove();

    }

    function onFinish(ev) {

        const articleEl = ev.target.parentElement.parentElement;

        ev.target.parentElement.remove();

        greenDivEl.appendChild(articleEl);

    }

    function validateInput(task, desc, date) {

        return task && desc && date;

    }

    function createElement(type, content, className) {

        const el = document.createElement(type);

        if (content) {

            el.textContent = content;

            if (content == 'Start') {

                el.addEventListener('click', onStart);

            } else if (content == 'Delete') {

                el.addEventListener('click', onDelete);

            } else if (content == 'Finish') {

                el.addEventListener('click', onFinish);

            }

        }

        if (className) {

            el.setAttribute('class', className);

        }

        return el;

    }

    function appendChildren(parent, ...children) {

        children.forEach(c => parent.appendChild(c));

        return parent;

    }

}