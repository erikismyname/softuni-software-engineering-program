import { createElement } from './createElement.js';
import { appendChildrenToParent, removeChildrenFromParent } from './appendAndRemoveChildren.js';

export function renderMovies(movies, parentEl) {

    const domFragment = document.createDocumentFragment();

    movies.map(createMoviePreview).forEach(m => domFragment.appendChild(m));

    removeChildrenFromParent(parentEl);

    parentEl.appendChild(domFragment);

}

function createMoviePreview(movie) {

    return appendChildrenToParent(createElement('div', '', { class: 'card mb-4' }), createElement('img', '', { class: 'card-img-top', src: movie.img, alt: 'Card image cap', width: '400' }), appendChildrenToParent(createElement('div', '', { class: 'card-body' }), createElement('h4', movie.title, { class: 'card-title' })), appendChildrenToParent(createElement('div', '', { class: 'card-footer' }), appendChildrenToParent(createElement('a', '', { href: '#' }), createElement('button', 'Details', { type: 'button', class: 'btn btn-info', 'data-id': movie._id}))));

}