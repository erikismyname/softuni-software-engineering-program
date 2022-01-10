import { getArticlesDetails } from './api.js';

export async function createArticlesPreviews(articlesArr) {

    const articlesDetails = await getArticlesDetails();

    return articlesArr.map(createArticleCard);

    function createArticleCard(article, i) {

        return appendChildrenToParent(createElement('div', '', { className: 'accordion' }),
            appendChildrenToParent(createElement('div', '', { className: 'head' }), createElement('span', article.title), createElement('button', 'More', { className: 'button', onClick: onLoad })), appendChildrenToParent(createElement('div', '', { className: 'extra' }), createElement('p', articlesDetails[i]))
        );

    }

}

async function onLoad(ev) {

    const divElExtra = ev.target.parentElement.nextElementSibling;

    divElExtra.style.display = divElExtra.style.display == '' ? 'block' : '';

    ev.target.textContent = ev.target.textContent == 'More' ? 'Less' : 'More';

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

export function getSectionElement() {

    const sectionEl = document.querySelector('#main');

    return sectionEl;

}