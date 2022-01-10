import { appendChildrenToParent } from './appendAndRemoveChildren.js';
import { createElement } from '../dom/createElement.js';
import { deleteIdea } from '../services/ideaService.js';
import { showDashboardView } from '../views/dashboard.js';
import { setActiveLink } from '../views/nav.js';

export function createIdeaCard(idea) {

    const isAuthor = localStorage.getItem('userId') == idea._ownerId;

    const domFragment = document.createDocumentFragment();

    appendChildrenToParent(domFragment, createElement('img', '', { class: 'det-img', src: idea.img }), appendChildrenToParent(createElement('div', '', { class: 'desc' }), createElement('h2', idea.title, { class: 'display-5' }), createElement('p', 'Description:', { class: 'infoType' }), createElement('p', idea.description, { class: 'idea-description' })));

    if (isAuthor) {

        appendChildrenToParent(domFragment, appendChildrenToParent(createElement('div', '', { class: 'text-center' }), createElement('a', 'Delete', { class: 'btn detb', id: idea._id, href: '#', onClick: onIdeaDelete })));

    }

    return domFragment;

}

async function onIdeaDelete(ev) {

    ev.preventDefault();

    try {

        const isConfirmed = confirm('Are you sure you want to delete this idea?');

        if (isConfirmed) {

            await deleteIdea(ev.target.id);

            setActiveLink('dashboard-link');

            showDashboardView();

        }

    } catch (err) {

        alert(err);

    }

}