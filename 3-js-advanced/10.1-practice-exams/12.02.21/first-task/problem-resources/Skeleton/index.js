function solve() {

    const elmnts = getDOMElements();

    attachEvListnr();

    function getDOMElements() {

        const inputElLecNm = document.querySelector('input[name="lecture-name"]');

        const inputElLecDate = document.querySelector('input[name="lecture-date"]');

        const selectElModule = document.querySelector('select');

        const divElWrapp = document.querySelector('div');

        return {

            inputElLecNm,

            inputElLecDate,

            selectElModule,

            divElWrapp,

        };

    }

    function attachEvListnr() {

        document.querySelector('button').addEventListener('click', onAdd);

    }

    function onAdd(ev) {

        ev.preventDefault();

        if (validateInput(elmnts.inputElLecNm, elmnts.inputElLecDate, elmnts.selectElModule)) {

            controller();

        }

    }

    function validateInput(name, date, module) {

        return name.value && date.value && module.value != 'Select module';

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

    function getModuleName(name) {

        return `${name.toUpperCase()}-MODULE`;

    }

    function getLectureNameAndDate(name, dateAndTime) {

        let [date, time] = dateAndTime.split('T');

        const pattern = /-/g;

        date = date.replace(pattern, '/');

        return `${name} - ${date} - ${time}`;

    }

    function onDelete(ev) {

        const divEl = ev.target.parentElement.parentElement.parentElement;

        const ulEl = ev.target.parentElement.parentElement;

        const liEl = ev.target.parentElement;

        ulEl.children.length > 1 ? liEl.remove() : divEl.remove();

    }

    function validateModule(parent) {

        return Array.from(parent.querySelectorAll('div > h3')).map(e => e.textContent).filter(e => e == getModuleName(elmnts.selectElModule.value)).length;

    }

    function controller() {

        if (!validateModule(elmnts.divElWrapp)) {

            appendChildren(elmnts.divElWrapp,
                appendChildren(createElement('div', '', { className: 'module' }), createElement('h3', getModuleName(elmnts.selectElModule.value)),
                    appendChildren(createElement('ul'),
                        appendChildren(createElement('li', '', { className: 'flex' }), createElement('h4', getLectureNameAndDate(elmnts.inputElLecNm.value, elmnts.inputElLecDate.value)), createElement('button', 'Del', { className: 'red', onClick: onDelete }))
                    )
                )
            );

        } else {

            const currentDiv = Array.from(elmnts.divElWrapp.children).find(e => e.children[0].textContent == getModuleName(elmnts.selectElModule.value));

            const currentUl = currentDiv.querySelector('ul');

            appendChildren(currentUl,
                appendChildren(createElement('li', '', { className: 'flex' }), createElement('h4', getLectureNameAndDate(elmnts.inputElLecNm.value, elmnts.inputElLecDate.value)), createElement('button', 'Del', { className: 'red', onClick: onDelete }))
            )

            Array.from(currentUl.children).sort(sortDates).forEach(e => currentUl.appendChild(e));

        }

    }

    function sortDates(firstLi, secondLi) {

        const firstDate = firstLi.querySelector('h4').textContent.slice(-19);

        const secondDate = secondLi.querySelector('h4').textContent.slice(-19);

        return firstDate.localeCompare(secondDate);

    }

}