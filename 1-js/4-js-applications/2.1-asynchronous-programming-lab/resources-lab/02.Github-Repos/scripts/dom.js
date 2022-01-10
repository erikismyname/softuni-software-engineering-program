function getDOMElements() {

    const inputEl = document.querySelector('#username');

    const ulEl = document.querySelector('#repos');

    return { inputEl, ulEl };

}

function renderReposData(arr) {

    const { inputEl, ulEl } = getDOMElements();

    const domFragment = document.createDocumentFragment();

    arr.forEach(o => {

        appendChildrenToParent(domFragment,
            appendChildrenToParent(createElement('li'), createElement('a', o.full_name, { href: o.html_url }))
        );

    });

    removeChildrenFromParent(ulEl);

    appendChildrenToParent(ulEl, domFragment);

    inputEl.value = '';

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

function removeChildrenFromParent(parent) {

    [...parent.children].forEach(c => c.remove());

}

export { getDOMElements, renderReposData };