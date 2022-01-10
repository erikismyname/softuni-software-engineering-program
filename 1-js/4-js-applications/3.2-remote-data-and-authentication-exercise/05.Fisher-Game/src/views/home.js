import { appendChildrenToParent, removeChildrenFromParent } from '../dom/appendAndRemoveElmnts.js';
import { activateHomeLink } from '../util/setActiveLink.js';
import { setUserNav } from '../main.js';
import { urls } from '../config/links.js';
import { makeARequest } from '../api/requests.js';
import { getUserId } from '../util/userCred/handleUserId.js';
import { getDOMElements } from '../dom/getElements.js';
import { createElement } from '../dom/createElement.js';
import { checkFormValues } from '../util/formData/createForm.js';
import { getUserToken } from '../util/userCred/handleUserToken.js'
import { resetFormData } from '../util/formData/resetForm.js';
import { trimInputValue } from '../util/trimInputValue.js';
import { validateInputData } from '../util/validations/validateInputData.js';

let mainEl;
let sectionEl;

function setUpHomeView(mainElInput, sectionElInput) {

    mainEl = mainElInput;

    sectionEl = sectionElInput;

    sectionEl.querySelector('.load').addEventListener('click', onCatchesLoad);

    sectionEl.querySelector('#addForm').addEventListener('submit', onCatchCreate);

}

function showHomeView() {

    removeChildrenFromParent(mainEl);

    mainEl.appendChild(sectionEl);

    setUserNav();

    activateHomeLink();

    sectionEl.querySelector('.add').disabled = getUserId() ? false : true;

}

export async function onCatchesLoad() {

    const catchesData = await makeARequest(urls.catches);

    renderCatches(catchesData);

}

function renderCatches(catches) {

    const { fieldsetEl, divElCatches } = getDOMElements()

    const domFragment = document.createDocumentFragment();

    catches.map(createCatch).forEach(c => domFragment.appendChild(c));

    removeChildrenFromParent(divElCatches);

    divElCatches.appendChild(domFragment);

    fieldsetEl.style.display = 'inline-block';

}

function createCatch(catchData) {

    const isRecordOwner = getUserId() == catchData._ownerId;

    return appendChildrenToParent(createElement('div', '', { className: 'catch' }), createElement('label', 'Angler'), createElement('input', '', { className: 'angler', value: catchData.angler }), createElement('hr'), createElement('label', 'Weight'), createElement('input', '', { type: 'number', className: 'weight', value: catchData.weight }), createElement('hr'), createElement('label', 'Species'), createElement('input', '', { className: 'species', value: catchData.species }), createElement('hr'), createElement('label', 'Location'), createElement('input', '', { className: 'location', value: catchData.location }), createElement('hr'), createElement('label', 'Bait'), createElement('input', '', { className: 'bait', value: catchData.bait }), createElement('hr'), createElement('label', 'Capture Time'), createElement('input', '', { type: 'number', className: 'captureTime', value: catchData.captureTime }), createElement('hr'), createElement('button', 'Update', { id: catchData._id, className: 'update', disabled: isRecordOwner ? false : true, onClick: onCatchUpdate }), createElement('button', 'Delete', { id: catchData._id, className: 'delete', disabled: isRecordOwner ? false : true, onClick: onCatchDelete }));

}

async function onCatchCreate(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const { angler, weight, species, location, bait, captureTime } = checkFormValues(formData);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getUserToken(),
            },
            body: JSON.stringify({
                angler,
                weight,
                species,
                location,
                bait,
                captureTime,
            }),
        };

        await makeARequest(urls.catches, options);

        resetFormData(ev.target);

        onCatchesLoad();

    } catch (err) {

        alert(err);

    }

}

async function onCatchUpdate(ev) {

    ev.preventDefault();

    const recordId = ev.target.id;

    const divElParent = ev.target.parentElement;

    const angler = trimInputValue(divElParent.querySelector('input[class="angler"]').value);

    const weight = trimInputValue(divElParent.querySelector('input[class="weight"]').value);

    const species = trimInputValue(divElParent.querySelector('input[class="species"]').value);

    const location = trimInputValue(divElParent.querySelector('input[class="location"]').value);

    const bait = trimInputValue(divElParent.querySelector('input[class="bait"]').value);

    const captureTime = trimInputValue(divElParent.querySelector('input[class="captureTime"]').value);

    try {

        validateInputData(angler, weight, species, location, bait, captureTime);

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getUserToken(),
            },
            body: JSON.stringify({
                angler,
                weight,
                species,
                location,
                bait,
                captureTime,
            }),
        };

        await makeARequest(urls.catches + recordId, options);

        onCatchesLoad();

    } catch (err) {

        alert(err);

    }

}

async function onCatchDelete(ev) {

    const recordId = ev.target.id;

    const isConfirmed = confirm('Are you sure you want to delete this record?');

    if (isConfirmed) {

        const options = {
            method: 'DELETE',
            headers: { 'X-Authorization': getUserToken() },
        };

        try {

            await makeARequest(urls.catches + recordId, options);

            onCatchesLoad();

        } catch (err) {

            alert(err);

        }

    }

}

export { setUpHomeView, showHomeView };