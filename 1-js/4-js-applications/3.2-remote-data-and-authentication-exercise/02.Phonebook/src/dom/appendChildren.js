export function appendChildrenToParent(parent, ...children) {

    parent.append(...children);

    return parent;

}