import { getDOMElements } from '../dom/getDOMElements.js';

export function setUserNav(ctx) {

    const { divElUser, divElGuest } = getDOMElements();

    const userToken = ctx.getUserData('userToken');

    if (userToken) {

        divElUser.style.display = 'block';

        divElGuest.style.display = 'none';

    } else {

        divElUser.style.display = 'none';

        divElGuest.style.display = 'block';

    }

}