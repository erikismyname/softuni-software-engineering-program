import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { logUserIn } from '../services/userService.js';
import { showHomeView } from './home.js';
import { setActiveLink, setUserNavigation } from './nav.js';
import { showRegisterView } from './register.js';

let mainEl;
let sectionEl;

function setUplogInView(inputMainEl, inputSectionEl) {
    mainEl = inputMainEl;
    sectionEl = inputSectionEl;
    sectionEl.querySelector('form').addEventListener('submit', onUserLogIn);
    sectionEl.querySelector('#go-to-register').addEventListener('click', goToRegisterView);
}

function showLogInView() {

    removeChildrenFromParent(mainEl);

    mainEl.appendChild(sectionEl);

}

async function onUserLogIn(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email');

    const password = formData.get('password');

    try {

        await logUserIn(email, password);

        ev.target.reset();

        showHomeView();

        setUserNavigation();

    } catch (err) {

        alert(err);

    }

}

function goToRegisterView(ev) {

    ev.preventDefault();

    setActiveLink('register-link');

    showRegisterView();

}

export { setUplogInView, showLogInView };