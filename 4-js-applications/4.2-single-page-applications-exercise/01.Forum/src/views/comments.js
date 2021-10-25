import { removeChildrenFromParent } from "../dom/appendAndRemoveChildren.js";
import { renderComments } from "../dom/renderComments.js";

let sectionEl;
let targetEl;

function setUpCommentsView(sectionElInput, targetElInput) {
    sectionEl = sectionElInput;
    targetEl = targetElInput;
}

async function showCommentsView(post) {

    removeChildrenFromParent(sectionEl);

    sectionEl.appendChild(targetEl);

    renderComments(post, targetEl);

    

}

export { setUpCommentsView, showCommentsView };