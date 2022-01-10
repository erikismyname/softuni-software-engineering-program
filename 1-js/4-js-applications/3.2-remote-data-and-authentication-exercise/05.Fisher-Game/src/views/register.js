import { removeChildrenFromParent } from '../dom/appendAndRemoveElmnts.js';
import { checkFormValues } from '../util/formData/authForm.js';
import { resetFormData } from '../util/formData/resetForm.js'
import { urls } from '../config/links.js';
import { makeARequest } from '../api/requests.js';
import { setUserToken } from '../util/userCred/handleUserToken.js';
import { setUserEmail } from '../util/userCred/handleUserEmail.js';
import { setUserId } from '../util/userCred/handleUserId.js';
import { showHomeView } from '../views/home.js';
import { validateInputData } from '../util/validations/validateInputData.js';
import { validatePasswordsMatch } from '../util/validations/validatePasswordsMatch.js';

let mainEl;
let sectionEl;

function setUpRegisterView(mainElInput, sectionElInput) {

    mainEl = mainElInput;

    sectionEl = sectionElInput;

    sectionEl.querySelector('#register').addEventListener('submit', onUserRegister);

}

function showRegisterView() {

    removeChildrenFromParent(mainEl);

    mainEl.appendChild(sectionEl);

}

async function onUserRegister(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const { email, password } = checkFormValues(formData);

        const rePass = formData.get('rePass');

        validateInputData(rePass);

        validatePasswordsMatch(password, rePass);

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        };

        const registerData = await makeARequest(urls.users + 'register', options);

        setUserToken(registerData);

        setUserEmail(registerData);

        setUserId(registerData);

        resetFormData(ev.target);

        showHomeView();

    } catch (err) {

        alert(err);

    }

}

export { setUpRegisterView, showRegisterView };