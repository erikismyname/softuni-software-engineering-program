export function createProfileCards(cards) {

    return Object.values(cards).map(createCardPreview);

}

function createCardPreview(card, idx) {

    idx++;

    return appendChildrenToParent(createElement('div', '', { className: 'profile' }), createElement('img', '', { src: './iconProfile2.png', className: 'userIcon' }), createElement('label', 'Lock'), createElement('input', '', { type: 'radio', name: `user${idx}Locked`, value: 'lock', checked: true }), createElement('label', 'Unlock'), createElement('input', '', { type: 'radio', name: `user${idx}Locked`, value: 'unlock' }), createElement('br'), createElement('hr'), createElement('label', 'Username'), createElement('input', '', { type: 'text', name: `user${idx}Username`, value: card.username, disabled: true, readonly: true }), appendChildrenToParent(createElement('div', '', { id: `user${idx}HiddenFields` }), createElement('hr'), createElement('label', 'Email:'), createElement('input', '', { type: 'email', name: `user${idx}Email`, value: card.email, disabled: true, readonly: true }), createElement('label', 'Age:'), createElement('input', '', { type: 'email', name: `user${idx}Age`, value: card.age, disabled: true, readonly: true })), createElement('button', 'Show more', { onClick: onShowMore }));

}

function onShowMore(ev) {

    const inputElLocked = ev.target.parentElement.querySelector('input[value="unlock"]');

    if (inputElLocked.checked) {

        const divElHidden = ev.target.previousElementSibling;

        divElHidden.style.display = divElHidden.style.display == '' ? 'block' : '';

        ev.target.textContent = ev.target.textContent == 'Show more' ? 'Hide it' : 'Show more';

    }

}

export function getMainElement() {

    const mainEl = document.querySelector('#main');

    return mainEl;

}

function createElement(type, content, attributes) {

    const elmnt = document.createElement(type);

    if (content) {

        elmnt.textContent = content;

    }

    if (attributes) {

        Object.entries(attributes).forEach(([k, v]) => {

            k.slice(0, 2) == 'on' ? elmnt.addEventListener('click', v) : elmnt[k] = v;

        });

    }

    return elmnt;

}

function appendChildrenToParent(parent, ...children) {

    parent.append(...children);

    return parent;

}