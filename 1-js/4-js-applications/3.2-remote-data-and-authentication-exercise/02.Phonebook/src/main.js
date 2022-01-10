import { getDOMElements } from './dom/getElements.js';
import { makeARequest } from './api/makeARequest.js';
import { url } from './config/url.js';
import { renderPhones } from './dom/renderPhones.js';
import { validateInputs } from './util/validateInputs.js';
import { trimInputs } from './util/trimInputs.js';
import { clearInputs } from './util/clearInputs.js';

attachEventListeners();

function attachEventListeners() {

    const { ulElPhonebook, btnElLoad, btnElCreate } = getDOMElements();

    ulElPhonebook.addEventListener('click', onDelete);

    btnElLoad.addEventListener('click', onLoad);

    btnElCreate.addEventListener('click', onCreate);

}

async function onLoad() {

    try {

        const phones = await makeARequest(url);

        renderPhones(phones);

    } catch (err) {

        alert(err);

    }

}

async function onCreate() {

    const { inputElPerson, inputElPhone } = getDOMElements();

    if (!validateInputs(inputElPerson, inputElPhone)) {

        alert('Would you kindly enter both a person and a phone?');

        return;

    }

    const [person, phone] = trimInputs(inputElPerson, inputElPhone);

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person, phone }),
    };

    try {

        clearInputs(inputElPerson, inputElPhone);

        await makeARequest(url, options);

        const phones = await makeARequest(url);

        renderPhones(phones);

        alert('Successfully added record!');

    } catch (err) {

        alert(err);

    }

}

async function onDelete(ev) {

    if (ev.target.tagName == 'BUTTON') {

        const phoneId = ev.target.parentElement.dataset.id;

        try {

            await makeARequest(url + phoneId, { method: 'DELETE' });

            const phones = await makeARequest(url);

            renderPhones(phones);

            alert('Successfully deleted record!');

        } catch (err) {

            alert(err);

        }

    }

}