function addDestination() {

    const [inputElCity, inputElCountry] = Array.from(document.querySelectorAll('#input input'));

    const selectEl = document.querySelector('#seasons');

    const tBodyEl = document.querySelector('#destinationsList');

    const inputElmnts = Array.from(document.querySelectorAll('#summaryBox input'));

    if (validateInput(inputElCity.value, inputElCountry.value)) {

        appendChildren(tBodyEl, appendChildren(createElement('tr'), createElement('td', `${inputElCity.value}, ${inputElCountry.value}`), createElement('td', capitaliseWord(selectEl.value))));

        displayInfo(selectEl.value);

        inputElCity.value = '';

        inputElCountry.value = '';

    }

    function validateInput(city, country) {

        return city && country;

    }

    function appendChildren(parent, ...children) {

        children.forEach(e => parent.appendChild(e));

        return parent;

    }

    function createElement(type, content) {

        const el = document.createElement(type);

        if (content) {

            el.textContent = content;

        }

        return el;

    }

    function capitaliseWord(word) {

        return word[0].toUpperCase() + word.slice(1);

    }

    function displayInfo(season) {

        const current = inputElmnts.find(e => e.id == season);

        Number(current.value++);

    }

}