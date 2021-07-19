import { setUpHomeView, showHomeView } from './views/home.js';
import { setUpLogInView, showLogInView } from './views/logIn.js';
import { setUpRegisterView, showRegisterView } from './views/register.js';
import { setUpDetailsView } from './views/details.js';
import { setUpCreateView, showCreateView } from './views/create.js';
import { setUpEditView } from './views/edit.js';
import { getDOMElements } from './dom/getDOMElements.js';
import { logUserOut } from './services/userService.js';
import { setUserNavigation } from './views/nav.js';

const links = {
    'home-link': showHomeView,
    'login-link': showLogInView,
    'register-link': showRegisterView,
    'create-link': showCreateView,
};

setUpSection('home-page', setUpHomeView);
setUpSection('form-login', setUpLogInView);
setUpSection('form-sign-up', setUpRegisterView);
setUpSection('movie-details', setUpDetailsView);
setUpSection('add-movie', setUpCreateView);
setUpSection('edit-movie', setUpEditView);

startApplication();

function startApplication() {

    showHomeView();

    setUpNavigation();

    setUserNavigation();

}

function setUpSection(sectionId, setUpFunc) {

    const { mainEl } = getDOMElements();

    const sectionElTarget = document.querySelector(`#${sectionId}`);

    setUpFunc(mainEl, sectionElTarget);

}

function setUpNavigation() {

    const { navEl, aElAddMovie, aElLogOut } = getDOMElements();

    navEl.addEventListener('click', onLinkClick);

    aElAddMovie.addEventListener('click', onLinkClick);

    aElLogOut.addEventListener('click', onUserLogOut);

}

function onLinkClick(ev) {

    ev.preventDefault();

    const targetLinkId = ev.target.id;

    if (links[targetLinkId]) {

        links[targetLinkId]();

    }

}

async function onUserLogOut(ev) {

    ev.preventDefault();

    await logUserOut();

    setUserNavigation();

    showLogInView();

}