export function renderReposData(arr) {

    const ulEl = document.querySelector('#res');

    const domFragment = document.createDocumentFragment();

    arr.forEach(o => {

        const liEl = appendChildrenToParent(createElement('li'), createElement('a', o.full_name, { href: o.html_url }));

        domFragment.appendChild(liEl);

    });

    ulEl.appendChild(domFragment);

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

function appendChildrenToParent(parent, ...children) {

    parent.append(...children);

    return parent;

}