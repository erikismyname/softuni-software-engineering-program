import { getDOMElements } from '../dom/getDOMElements.js';

function setUserNav() {

    const { divElUser, divElGuest, spanEl } = getDOMElements();

    const userEmail = sessionStorage.getItem('userEmail');

    if (userEmail) {

        divElUser.style.display = 'block';

        divElGuest.style.display = 'none';

        spanEl.textContent = `Welcome, ${userEmail}`;

    } else {

        divElUser.style.display = 'none';

        divElGuest.style.display = 'block';

    }

}

function setActiveNav(pathname) {

    const { aElmnts } = getDOMElements();

    aElmnts.forEach(a => a.classList.remove('active'));

    if (!pathname) {

        return;

    }

    [...aElmnts].find(a => a.pathname == pathname).classList.add('active');

}

export {
    setUserNav,
    setActiveNav,
};