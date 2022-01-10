import { getDOMElements } from './dom/getDOMElements.js';
import { getOptions, createOption } from './service/optionsService.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { selectElTemplate } from './templates/optionsTemplates.js';

onApplicationStart();

async function onApplicationStart() {

    const { divEl } = getDOMElements();

    attachEventListener();

    try {

        const options = await getOptions();

        render(selectElTemplate(options), divEl);

    } catch (err) {

        alert(err);

    }

}

function attachEventListener() {

    const { formEl } = getDOMElements();

    formEl.addEventListener('submit', onOptionAdd);

}

async function onOptionAdd(ev) {

    const { divEl } = getDOMElements();

    ev.preventDefault();

    const formData = new FormData(ev.target);

    const inputValue = formData.get('option').trim();

    if (!inputValue) {

        alert('Would you kindly enter an option name?');

        return;

    }

    try {

        await createOption({ text: inputValue });
        
        ev.target.reset();
        
        const options = await getOptions();
        
        render(selectElTemplate(options), divEl);

    } catch (err) {

        alert(err);

    }

}