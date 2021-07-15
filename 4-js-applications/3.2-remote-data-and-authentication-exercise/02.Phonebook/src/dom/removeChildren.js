export function removeChildrenFromParent(parent) {

    [...parent.children].forEach(c => c.remove());

}