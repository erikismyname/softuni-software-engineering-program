import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { getIdea } from '../services/ideaService.js';
import { createIdeaCard } from '../dom/createIdeaCard.js';

let mainEl;
let sectionEl;

function setUpDetailsView(inputMainEl, inputSectionEl) {
    mainEl = inputMainEl;
    sectionEl = inputSectionEl;
}

async function showDetailsView(id) {

    removeChildrenFromParent(mainEl);

    removeChildrenFromParent(sectionEl);

    mainEl.appendChild(sectionEl);

    try {

        const idea = await getIdea(id);

        const domFragment = createIdeaCard(idea);

        sectionEl.appendChild(domFragment);

    } catch (err) {

        alert(err);

    }

}

export { setUpDetailsView, showDetailsView };