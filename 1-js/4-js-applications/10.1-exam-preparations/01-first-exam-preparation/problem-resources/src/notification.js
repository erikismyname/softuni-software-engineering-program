import { getDOMElements } from './dom/getDOMElements.js';

export function notifyUser(message) {

    const { divElNotification, spanElMsg } = getDOMElements();

    divElNotification.style.display = 'block';

    spanElMsg.textContent = message;

    setTimeout(() => {

        divElNotification.style.display = 'none';

    }, 3000);

}