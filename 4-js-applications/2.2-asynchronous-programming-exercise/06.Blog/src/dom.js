export function getDOMElements() {

    const selectEl = document.querySelector('#posts');

    const h1El = document.querySelector('#post-title');

    const ulElPostBody = document.querySelector('#post-body');

    const ulElPostComments = document.querySelector('#post-comments');

    const btnElLoad = document.querySelector('#btnLoadPosts');

    const btnElView = document.querySelector('#btnViewPost');

    return {

        selectEl,

        h1El,

        ulElPostBody,

        ulElPostComments,

        btnElLoad,

        btnElView,

    }

}

export function displayOptions(postsArr) {

    const { selectEl } = getDOMElements();

    return postsArr.map(p => createElement('option', p.title, { value: p.id })).forEach(o => selectEl.appendChild(o));

}

export function displayPostDetails(post, comments) {

    const { h1El, ulElPostBody, ulElPostComments } = getDOMElements();

    h1El.textContent = post.title;

    ulElPostBody.textContent = post.body;

    [...ulElPostComments.children].forEach(c => c.remove());

    const domFragment = document.createDocumentFragment();

    comments.map(c => createElement('li', c.text)).forEach(c => domFragment.appendChild(c));

    ulElPostComments.appendChild(domFragment);

}

function createElement(type, content, attributes) {

    const elmnt = document.createElement(type);

    if (content) {

        elmnt.textContent = content;

    }

    if (attributes) {

        Object.entries(attributes).forEach(([k, v]) => {

            elmnt[k] = v;

        });

    }

    return elmnt;

}