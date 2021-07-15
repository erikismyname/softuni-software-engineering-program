import { getDOMElements } from './dom/getElements.js';
import { makeARequest } from './api/makeARequest.js';
import { url } from './config/url.js';
import { displayStudentsData } from './dom/displayStudentsData.js';
import { getFormValues } from './util/getFormValues.js';
import { validateInputs } from './util/validateInputs.js';

attachEventListeners();

function attachEventListeners() {

    const { btnElLoad, formEl } = getDOMElements();

    btnElLoad.addEventListener('click', onLoad);

    formEl.addEventListener('submit', onSubmit);

}

async function onLoad() {

    try {

        const students = await makeARequest(url);

        displayStudentsData(students);

    } catch (err) {

        alert(err);

    }

}

async function onSubmit(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    const { firstName, lastName, facultyNumber, grade } = getFormValues(formData);

    if (!validateInputs(firstName, lastName, facultyNumber, grade)) {

        alert('Would you kindly fill all of the fields correctly?');

        return;

    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName,
            lastName,
            facultyNumber,
            grade,
        }),
    };

    ev.target.reset();

    try {

        await makeARequest(url, options);

        alert('Successfully created record!');

    } catch (err) {

        alert(err);

    }

}