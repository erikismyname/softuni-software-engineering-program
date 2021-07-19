import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { handleFormDataValues } from '../util/formData/loginAndRegister.js'
import { logUserIn } from '../services/userService.js';
import { showHomeView } from '../views/home.js';

let main;
let section;

function setUpLogInView(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    section.querySelector('form').addEventListener('submit', onUserLogIn);
}

function showLogInView() {

    removeChildrenFromParent(main);

    main.appendChild(section);

}

async function onUserLogIn(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const [email, password] = handleFormDataValues(formData, 'login');

        await logUserIn(email, password);
        
        ev.target.reset();

        showHomeView();

    } catch (err) {

        alert(err);

    }

}

export { setUpLogInView, showLogInView };