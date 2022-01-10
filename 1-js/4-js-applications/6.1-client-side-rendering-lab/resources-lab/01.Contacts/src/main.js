import { getDivElement } from './dom/getDivElement.js';
import { contacts } from './contacts.js';
import { contactCardTemplate } from './templates/contactsTemplates.js';
import { render } from '../node_modules/lit-html/lit-html.js';

onApplicationStart();

function onApplicationStart() {

    const divEl = getDivElement();

    divEl.addEventListener('click', onClick);

    const contactsCards = contacts.map(contactCardTemplate);

    render(contactsCards, divEl);

}

function onClick(ev) {

    if (ev.target.tagName == 'BUTTON') {

        const divElHidden = ev.target.nextElementSibling;

        divElHidden.classList.contains('details') ? divElHidden.classList.remove('details') : divElHidden.classList.add('details');

        ev.target.textContent = ev.target.textContent == 'Show Details' ? 'Hide Details' : 'Show Details';

    }

}