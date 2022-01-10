import { getDOMElements } from '../dom/getDOMElements.js';

export function setUserNav(ctx) {

    const { divElGuest, divElUser, aElWelcome } = getDOMElements();

    const username = ctx.getUserData('username');

    if (username) {

        divElGuest.style.display = 'none';

        divElUser.style.display = 'block';

        aElWelcome.textContent = `Welcome, ${username}`;

    } else {

        divElGuest.style.display = 'block';

        divElUser.style.display = 'none';

    }

}

function setActiveNav() {



}