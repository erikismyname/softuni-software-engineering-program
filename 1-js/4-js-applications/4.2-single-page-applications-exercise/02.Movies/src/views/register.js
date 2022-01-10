import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { handleFormDataValues } from '../util/formData/loginAndRegister.js';
import { registerUser } from '../services/userService.js';
import { showHomeView } from '../views/home.js';

let main;
let section;

function setUpRegisterView(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    section.querySelector('form').addEventListener('submit', onUserRegister);
}

function showRegisterView() {

    removeChildrenFromParent(main);

    main.appendChild(section);

}

async function onUserRegister(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const [email, password, rePassword] = handleFormDataValues(formData, 'register');

        if (password.length < 6) {

            throw new Error('Would you kindly enter a password that is at least six characters long?');

        } else if (password != rePassword) {

            throw new Error('Would you kindly take care of the mismatching passwords?');

        }

        await registerUser(email, password);
        
        ev.target.reset();

        showHomeView();

    } catch (err) {

        alert(err);

    }

}

export { setUpRegisterView, showRegisterView };