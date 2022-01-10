function appendChildrenToParent(parent, ...children) {

    parent.append(...children);

    return parent;

}

function removeChildrenFromParent(parent) {

    [...parent.children].forEach(c => c.remove());

}

export { appendChildrenToParent, removeChildrenFromParent };