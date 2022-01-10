import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { handleFormDataValues } from '../util/formData/editAndCreate.js';
import { createMovie } from '../services/movieService.js';
import { showHomeView } from '../views/home.js';

let main;
let section;

function setUpCreateView(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    section.querySelector('form').addEventListener('submit', onMovieCreate);
}

function showCreateView() {

    removeChildrenFromParent(main);

    main.appendChild(section);

}

async function onMovieCreate(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const [title, description, img] = handleFormDataValues(formData);

        ev.target.reset();

        await createMovie({ title, description, img });

        showHomeView();

    } catch (err) {

        alert(err);

    }

}

export { setUpCreateView, showCreateView };