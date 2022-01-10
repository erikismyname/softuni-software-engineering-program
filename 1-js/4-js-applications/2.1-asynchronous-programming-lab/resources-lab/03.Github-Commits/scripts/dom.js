function getDOMElements() {

    const inputElUsrnm = document.querySelector('#username');

    const inputElRepo = document.querySelector('#repo');

    const ulEl = document.querySelector('#commits');

    return {

        inputElUsrnm,

        inputElRepo,

        ulEl,

    };

}

function renderCommitMessages(arr) {

    const { inputElUsrnm, inputElRepo, ulEl } = getDOMElements();

    const domFragment = document.createDocumentFragment();

    arr.forEach(o => {

        appendChildrenToParent(domFragment,
            appendChildrenToParent(createElement('li'), createElement('a', `${o.commit.author.name}: ${o.commit.message}`, { href: o.html_url }))
        );

    });

    removeChildrenFromParent(ulEl);

    appendChildrenToParent(ulEl, domFragment);

    inputElUsrnm.value = '';

    inputElRepo.value = '';

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

export { getDOMElements, renderCommitMessages };