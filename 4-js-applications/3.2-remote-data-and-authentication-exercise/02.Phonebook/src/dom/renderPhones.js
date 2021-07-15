import { getDOMElements } from './getElements.js';
import { createElement } from './createElement.js';
import { removeChildrenFromParent } from './removeChildren.js';
import { appendChildrenToParent } from './appendChildren.js';

export function renderPhones(phones) {

    const { ulElPhonebook } = getDOMElements();

    const domFragment = document.createDocumentFragment();

    Object.values(phones)
        .map(transformPhoneData)
        .forEach(p => domFragment.appendChild(p));

    removeChildrenFromParent(ulElPhonebook);

    ulElPhonebook.appendChild(domFragment);

}

function transformPhoneData(phone) {

    return appendChildrenToParent(createElement('li', `${phone.person}: ${phone.phone}`, { 'data-id': phone._id }), createElement('button', 'Delete'));

}