import { getDOMElements } from './dom/getDOMElements.js';
import { handleFormData } from './util/handleFormData.js';
import { ulTemplate } from './templates/townsTemplates.js';
import { render } from '../node_modules/lit-html/lit-html.js';

attachEventListener();

function attachEventListener() {

    const { formEl } = getDOMElements();

    formEl.addEventListener('submit', onTownsLoad);

}

function onTownsLoad(ev) {

    const { divElRoot } = getDOMElements();

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const towns = handleFormData(formData);

        render(ulTemplate(towns), divElRoot);

    } catch (err) {

        alert(err);

    }

}