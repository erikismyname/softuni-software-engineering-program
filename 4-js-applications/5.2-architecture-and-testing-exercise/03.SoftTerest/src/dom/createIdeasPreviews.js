import { showDetailsView } from '../views/details.js';
import { appendChildrenToParent } from './appendAndRemoveChildren.js';
import { createElement } from './createElement.js';
import { setActiveLink } from '../views/nav.js';

export function createIdeasPreviews(ideas) {

    const domFragment = document.createDocumentFragment();

    ideas.map(createCardPreview).forEach(c => domFragment.appendChild(c));

    return domFragment;

}

function createCardPreview(card) {

    return appendChildrenToParent(createElement('div', '', { class: 'card overflow-hidden current-card details', width: '20rem', height: '18rem' }), appendChildrenToParent(createElement('div', '', { class: 'card-body' }), createElement('p', card.title, { class: 'card-text' })), createElement('img', '', { class: 'card-image', src: card.img, alt: 'Card image cap' }), createElement('a', 'Details', { href: '#', id: card._id, onClick: onShowIdeaDetails }));

}

function onShowIdeaDetails(ev) {

    setActiveLink();

    showDetailsView(ev.target.id);

}