import { getDOMElements } from '../dom/getDOMElements.js';

function setUserNav() {

    const { divElGuest, divElUser } = getDOMElements();

    const userToken = sessionStorage.getItem('userToken');

    if (userToken) {

        divElGuest.style.display = 'none';

        divElUser.style.display = 'inline-block';

    } else {

        divElGuest.style.display = 'inline-block';

        divElUser.style.display = 'none';

    }

}

function setActiveNav(linkId) {

    const { aElmnts } = getDOMElements();

    aElmnts.forEach(a => a.classList.remove('active'));

    if (!linkId) {

        return;

    }

    [...aElmnts].find(a => a.id == linkId).classList.add('active');

}

export { setUserNav, setActiveNav };