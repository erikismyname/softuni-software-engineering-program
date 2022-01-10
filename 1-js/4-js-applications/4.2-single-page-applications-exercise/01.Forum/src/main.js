import { getDOMElements } from './dom/getDOMElements.js';
import { setUpHomeView, showHomeView } from './views/home.js';
import { setUpCommentsView } from './views/comments.js';

setUpView('home-view', setUpHomeView);
setUpView('comments-view', setUpCommentsView);

startApplication();

function startApplication() {

    setUpNavigation();

    showHomeView();

}

function setUpView(targetElId, setUpFunc) {

    const { sectionEl } = getDOMElements();

    const targetEl = document.querySelector(`#${targetElId}`);

    setUpFunc(sectionEl, targetEl);

}

function setUpNavigation() {

    const { aElHome } = getDOMElements();

    aElHome.addEventListener('click', onHomeLinkClick);

}

async function onHomeLinkClick(ev) {

    ev.preventDefault();

    showHomeView();

}