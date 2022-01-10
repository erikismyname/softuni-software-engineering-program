import { getDOMElements } from './dom/getDOMElements.js';
import { towns } from './towns.js';
import { getMatches } from './util/getMatches.js';
import { ulElTemplate } from './templates/townTemplates.js';
import { render } from '../node_modules/lit-html/lit-html.js';

onApplicationStart();

function onApplicationStart() {

    const { divElTowns, buttonEl } = getDOMElements();

    buttonEl.addEventListener('click', onSearch);

    render(ulElTemplate(towns), divElTowns);

}

function onSearch() {

    const { divElTowns, divElResult, inputEl } = getDOMElements();

    const inputValue = inputEl.value.trim();

    if (!inputValue) {

        alert('Would you kindly enter a town?');

        render(ulElTemplate(towns), divElTowns);

        divElResult.textContent = '';

        return;

    }

    render(ulElTemplate(towns, inputValue), divElTowns);

    divElResult.textContent = getMatches(towns, inputValue);

}