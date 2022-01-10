import { getDOMElements } from "../dom/getDOMElements.js";

function setUserNavigation() {

    const { liElmntsUser, liElmntsGuest } = getDOMElements();

    const userToken = localStorage.getItem('userToken');

    if (userToken) {

        liElmntsUser.forEach(l => l.style.display = 'block');

        liElmntsGuest.forEach(l => l.style.display = 'none');

    } else {

        liElmntsUser.forEach(l => l.style.display = 'none');

        liElmntsGuest.forEach(l => l.style.display = 'block');

    }

}

function setActiveLink(linkId) {

    const { navEl, liElmnts } = getDOMElements();

    [...liElmnts].forEach(l => l.classList.remove('active'));

    if (!linkId) {

        return;

    }

    navEl.querySelector(`#${linkId}`).parentElement.classList.add('active');

}

export { setUserNavigation, setActiveLink };