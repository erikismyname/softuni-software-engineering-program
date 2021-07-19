import { createElement } from './createElement.js';
import { appendChildrenToParent } from './appendAndRemoveChildren.js';

export function getMovieCard(movie, movieLikes, userLike) {

    const movieCard = createMovieCard(movie, movieLikes, userLike);

    return movieCard;

}

function createMovieCard(movie, movieLikes, userLike) {

    const divElControls = appendChildrenToParent(createElement('div', '', { class: 'col-md-4 text-center' }), createElement('h3', 'Movie Description', { class: 'my-3' }), createElement('p', movie.description));

    const userId = sessionStorage.getItem('userId');

    if (userId) {

        if (userId == movie._ownerId) {

            appendChildrenToParent(divElControls, createElement('a', 'Delete', { class: 'btn btn-danger', href: '#', 'data-id': movie._id }), createElement('a', 'Edit', { class: 'btn btn-warning', href: '#', 'data-id': movie._id }));

        } else if (!userLike.length) {

            appendChildrenToParent(divElControls, createElement('a', 'Like', { class: 'btn btn-primary', href: '#', 'data-id': movie._id }));

        }

    }

    appendChildrenToParent(divElControls, createElement('span', `${movieLikes} ${movieLikes == 1 ? 'like' : 'likes'}`, { class: 'enrolled-span' }));

    return appendChildrenToParent(createElement('div', '', { class: 'container' }), appendChildrenToParent(createElement('div', '', { class: 'row bg-light text-dark' }), createElement('h1', `Movie Title: ${movie.title}`), appendChildrenToParent(createElement('div', '', { class: 'col-md-8' }), createElement('img', '', { class: 'img-thumbnail', src: movie.img, alt: 'Movie' })), divElControls));

}