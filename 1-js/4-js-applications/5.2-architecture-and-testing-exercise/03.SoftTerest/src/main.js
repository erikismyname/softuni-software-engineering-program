import { getDOMElements } from './dom/getDOMElements.js';
import { setUpCreateView, showCreateView } from './views/create.js';
import { setUpDashboardView, showDashboardView } from './views/dashboard.js';
import { setUpHomeView, showHomeView } from './views/home.js';
import { setUplogInView, showLogInView } from './views/login.js';
import { setUpRegisterView, showRegisterView } from './views/register.js';
import { setUpDetailsView } from './views/details.js';
import { setUserNavigation } from './views/nav.js';
import { setActiveLink } from './views/nav.js';
import { logUserOut } from './services/userService.js';

const views = {
    'home-link': showHomeView,
    'dashboard-link': showDashboardView,
    'create-link': showCreateView,
    'login-link': showLogInView,
    'register-link': showRegisterView,
};

setUpSection('home-holder', setUpHomeView);
setUpSection('register-holder', setUpRegisterView);
setUpSection('login-holder', setUplogInView);
setUpSection('dashboard-holder', setUpDashboardView);
setUpSection('details-holder', setUpDetailsView);
setUpSection('create-holder', setUpCreateView);

startApplication();

function startApplication() {
    setUpNavigation();
    setUserNavigation();
    showHomeView();
}

function setUpSection(sectionId, setUpFunc) {

    const { mainEl } = getDOMElements();

    const sectionEl = document.querySelector(`#${sectionId}`);

    setUpFunc(mainEl, sectionEl);

}

function setUpNavigation() {

    const { navEl, aElLogOut } = getDOMElements();

    navEl.addEventListener('click', onLinkClick);

    aElLogOut.addEventListener('click', onUserLogOut);

}

function onLinkClick(ev) {

    const targetId = ev.target.id;

    if (views[targetId]) {

        ev.preventDefault();

        setActiveLink(targetId);

        views[targetId]();

    }

}

async function onUserLogOut(ev) {

    ev.preventDefault();

    try {

        await logUserOut();

        setUserNavigation();

        setActiveLink();

        showHomeView();

    } catch (err) {

        alert(err);

    }

}