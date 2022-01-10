import { getDOMElements, onDepart, onArrive } from './dom.js';

attachEventListeners();

function attachEventListeners() {

    const { btnElDepart, btnElArrive } = getDOMElements();

    btnElDepart.addEventListener('click', onDepart);

    btnElArrive.addEventListener('click', onArrive);

}