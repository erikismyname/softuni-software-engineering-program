import { getDOMElements } from './dom/getElements.js';
import { onCatchesLoad, setUpHomeView, showHomeView } from './views/home.js';
import { setUpRegisterView, showRegisterView } from './views/register.js';
import { setUplogInView, showLogInView } from './views/login.js';
import { setActiveLink } from './util/setActiveLink.js';
import { getUserEmail, removeUserEmail } from './util/userCred/handleUserEmail.js';
import { getUserToken, removeUserToken } from './util/userCred/handleUserToken.js';
import { removeUserId } from './util/userCred/handleUserId.js';
import { logOutUser } from './api/requests.js';
import { urls } from './config/links.js';

setUpView('home-view', setUpHomeView);
setUpView('register-view', setUpRegisterView);
setUpView('login-view', setUplogInView);

onApplicationStart();

const links = {
    'home': showHomeView,
    'register': showRegisterView,
    'login': showLogInView,
};

function setUpView(sectionId, setUpFunc) {

    const { mainEl } = getDOMElements();

    const targetSectionEl = document.querySelector(`#${sectionId}`);

    setUpFunc(mainEl, targetSectionEl);

}

function onApplicationStart() {

    showHomeView();

    setUpNavigation();

    setUserNav();

}

function setUpNavigation() {

    const { aElmnts } = getDOMElements();

    [...aElmnts].forEach(a => a.addEventListener('click', (ev) => onLinkClick(ev, aElmnts)))

}

function onLinkClick(ev, aElmnts) {

    ev.preventDefault();

    setActiveLink(ev, aElmnts);

    const targetId = ev.target.id;

    targetId == 'logout' ? onLogout() : links[targetId]();

}

export function setUserNav() {

    const { divElGuest, divElUser, spanElName } = getDOMElements();

    const email = getUserEmail();

    if (email) {

        divElGuest.id = 'guest';

        divElUser.id = '';

        spanElName.textContent = `beloved ${email}`;

    } else {

        divElGuest.id = ''

        divElUser.id = 'user';

        spanElName.textContent = 'dear guest';

    }

}

async function onLogout() {

    const options = {
        method: 'GET',
        headers: { 'X-Authorization': getUserToken() },
    };

    try {

        await logOutUser(urls.users + 'logout', options);

        removeUserToken();

        removeUserEmail();

        removeUserId();

        showHomeView();

        onCatchesLoad();

    } catch (err) {

        alert(err);

    }

}