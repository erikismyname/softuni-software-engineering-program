import { getDOMElements } from '../dom/getDOMElements.js';

export function setUserNav(ctx) {

    const { divElGuest, divElUser, spanElMsg } = getDOMElements();

    const userEmail = ctx.getUserData('userEmail');

    if (userEmail) {

        divElGuest.style.display = 'none';

        divElUser.style.display = 'block'

        spanElMsg.textContent = `Welcome, ${userEmail}`;

    } else {

        divElGuest.style.display = 'block';

        divElUser.style.display = 'none';

    }

}