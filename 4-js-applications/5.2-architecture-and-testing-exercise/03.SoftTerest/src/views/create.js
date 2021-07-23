import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { handleFormValues } from '../util/formData/handleCreateFomData.js';
import { createIdea } from '../services/ideaService.js';
import { showDashboardView } from '../views/dashboard.js';
import { setActiveLink } from './nav.js';

let mainEl;
let sectionEl;

function setUpCreateView(inputMainEl, inputSectionEl) {
    mainEl = inputMainEl;
    sectionEl = inputSectionEl;
    sectionEl.querySelector('form').addEventListener('submit', onIdeaCreate);
}

function showCreateView() {

    removeChildrenFromParent(mainEl);

    mainEl.appendChild(sectionEl);

}

async function onIdeaCreate(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const [title, description, img] = handleFormValues(formData);

        await createIdea({ title, description, img });

        ev.target.reset(ev.target);

        setActiveLink('dashboard-link');

        showDashboardView();

    } catch (err) {

        alert(err);

    }

}

export { setUpCreateView, showCreateView };