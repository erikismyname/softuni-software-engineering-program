import { getDOMElements } from '../dom/getElements.js';

function setActiveLink(ev, aElmnts) {

    [...aElmnts].forEach(a => a.className = '');

    ev.target.className = 'active';

}

function activateHomeLink() {

    const { aElmnts } = getDOMElements();

    aElmnts[0].className = 'active';

}

export { setActiveLink, activateHomeLink };