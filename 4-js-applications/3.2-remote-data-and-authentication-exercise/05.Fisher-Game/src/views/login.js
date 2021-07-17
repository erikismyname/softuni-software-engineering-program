import { removeChildrenFromParent } from '../dom/appendAndRemoveElmnts.js';
import { checkFormValues } from '../util/formData/authForm.js';
import { resetFormData } from '../util/formData/resetForm.js'
import { urls } from '../config/links.js';
import { makeARequest } from '../api/requests.js';
import { setUserToken } from '../util/userCred/handleUserToken.js';
import { setUserEmail } from '../util/userCred/handleUserEmail.js';
import { setUserId } from '../util/userCred/handleUserId.js';
import { onCatchesLoad, showHomeView } from '../views/home.js';

let mainEl;
let sectionEl;

function setUplogInView(mainElInput, sectionElInput) {

    mainEl = mainElInput;

    sectionEl = sectionElInput;

    sectionEl.querySelector('#login').addEventListener('submit', onUserLogIn);

}

function showLogInView() {

    removeChildrenFromParent(mainEl);

    mainEl.appendChild(sectionEl);

}

async function onUserLogIn(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const { email, password } = checkFormValues(formData);

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        };

        const registerData = await makeARequest(urls.users + 'login', options);

        setUserToken(registerData);

        setUserEmail(registerData);

        setUserId(registerData);

        resetFormData(ev.target);

        showHomeView();

        onCatchesLoad();

    } catch (err) {

        alert(err);

    }


}

export { setUplogInView, showLogInView };