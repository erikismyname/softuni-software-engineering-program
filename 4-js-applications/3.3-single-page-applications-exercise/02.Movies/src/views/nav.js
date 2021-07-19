import { getDOMElements } from '../dom/getDOMElements.js';

export function setUserNavigation() {

    const { liElmntsUser, liElmntsGuest, spanElWelcomeMsg } = getDOMElements();

    const userEmail = sessionStorage.getItem('userEmail');

    if (userEmail) {

        liElmntsUser.forEach(e => e.style.display = 'block');

        spanElWelcomeMsg.textContent = `beloved ${userEmail.slice(0, userEmail.indexOf('@'))}!`;

        liElmntsGuest.forEach(e => e.style.display = 'none');

    } else {

        liElmntsUser.forEach(e => e.style.display = 'none');

        liElmntsGuest.forEach(e => e.style.display = 'block');

    }

}