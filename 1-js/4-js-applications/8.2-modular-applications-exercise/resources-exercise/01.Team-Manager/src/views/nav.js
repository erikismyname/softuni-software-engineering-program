import { getDOMElements } from '../dom/getDOMElements.js';

export function setUserNav() {

    const { aElmntsGuest, aElmntsUser } = getDOMElements();

    const userToken = sessionStorage.getItem('userToken');

    if (userToken) {

        aElmntsGuest.forEach(a => a.classList.add('guest'));

        aElmntsUser.forEach(a => a.classList.remove('user'));

    } else {

        aElmntsGuest.forEach(a => a.classList.remove('guest'));

        aElmntsUser.forEach(a => a.classList.add('user'));

    }

}