import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { showLogInView } from './login.js';
import { handleFormValues } from '../util/formData/handleRegisterFormData.js';
import { registerUser } from '../services/userService.js';
import { showHomeView } from './home.js';
import { setActiveLink, setUserNavigation } from './nav.js';

let mainEl;
let sectionEl;

function setUpRegisterView(inputMainEl, inputSectionEl) {
    mainEl = inputMainEl;
    sectionEl = inputSectionEl;
    sectionEl.querySelector('form').addEventListener('submit', onUserRegister);
    sectionEl.querySelector('#go-to-login').addEventListener('click', goToLogInView);
}

function showRegisterView() {

    removeChildrenFromParent(mainEl);

    mainEl.appendChild(sectionEl);

}

async function onUserRegister(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const [email, password] = handleFormValues(formData);

        await registerUser(email, password);

        ev.target.reset();

        showHomeView();

        setUserNavigation();

    } catch (err) {

        alert(err);

    }

}

function goToLogInView(ev) {

    ev.preventDefault();

    setActiveLink('login-link')

    showLogInView();

}

export { setUpRegisterView, showRegisterView };