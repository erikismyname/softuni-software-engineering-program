import { removeChildrenFromParent } from './appendAndRemoveChildren.js';
import { createElement } from './createElement.js';
import { getDOMElements } from './getDOMElements.js';

export function renderPosts(posts) {

    const { divElTopicCont } = getDOMElements();

    const domFragment = document.createDocumentFragment();

    Object.values(posts).map(createPostPreview).forEach(p => domFragment.appendChild(p));

    removeChildrenFromParent(divElTopicCont);

    divElTopicCont.appendChild(domFragment);

}

function createPostPreview(post) {

    const elmnt = createElement('div', '', { class: 'topic-name-wrapper' });

    elmnt.innerHTML = `
    <div class="topic-name">
        <a href="#" class="normal" data-id=${post._id}>
            <h2>${post.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${post.time}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                </div>
            </div>
        </div>
    </div>`;

    return elmnt;

}