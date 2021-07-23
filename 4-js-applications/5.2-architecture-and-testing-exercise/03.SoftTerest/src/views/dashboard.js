import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { getIdeas } from '../services/ideaService.js';
import { createIdeasPreviews } from '../dom/createIdeasPreviews.js';

let mainEl;
let sectionEl;
let h1El;

function setUpDashboardView(inputMainEl, inputSectionEl) {
    mainEl = inputMainEl;
    sectionEl = inputSectionEl;
    h1El = sectionEl.querySelector('h1');
}

async function showDashboardView() {

    removeChildrenFromParent(mainEl);

    removeChildrenFromParent(sectionEl);

    mainEl.appendChild(sectionEl);

    try {

        const ideas = await getIdeas();

        if (!ideas.length) {

            sectionEl.appendChild(h1El);

        } else {

            const domFragment = createIdeasPreviews(ideas);

            sectionEl.appendChild(domFragment);

        }

    } catch (err) {

        alert(err);

    }

}

export { setUpDashboardView, showDashboardView };