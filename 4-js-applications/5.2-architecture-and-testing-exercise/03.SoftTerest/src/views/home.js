import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { showDashboardView } from './dashboard.js';
import { setActiveLink } from './nav.js';

let mainEl;
let sectionEl;

function setUpHomeView(inputMainEl, inputSectionEl) {
    mainEl = inputMainEl;
    sectionEl = inputSectionEl;
    sectionEl.querySelector('#get-started-btn').addEventListener('click', onGetStarted);
}

function showHomeView() {

    removeChildrenFromParent(mainEl);

    mainEl.appendChild(sectionEl);

}

function onGetStarted(ev) {

    ev.preventDefault();

    showDashboardView();

    setActiveLink('dashboard-link');

}

export { setUpHomeView, showHomeView };