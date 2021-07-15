import { getDOMElements } from './getElements.js';
import { appendChildrenToParent, removeChildrenFromParent } from './appendAndRemove.js';
import { createElement } from './createElement.js';

export function displayBooks(books) {

    const { tblBodyEl } = getDOMElements();

    const domFragment = document.createDocumentFragment();

    Object.entries(books)
        .map(createTblRow)
        .forEach(r => domFragment.appendChild(r));

    removeChildrenFromParent(tblBodyEl);

    tblBodyEl.appendChild(domFragment);

}

function createTblRow([id, bookData]) {

    return appendChildrenToParent(createElement('tr', '', { 'data-id': id }), createElement('td', bookData.title), createElement('td', bookData.author), appendChildrenToParent(createElement('td'), createElement('button', 'Edit'), createElement('button', 'Delete')));

}