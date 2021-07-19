import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { getMovie, updateMovie } from '../services/movieService.js';
import { handleFormDataValues } from '../util/formData/editAndCreate.js';
import { showDetailsView } from './details.js';

let main;
let section;
let formEl;

function setUpEditView(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    formEl = section.querySelector('form');
    formEl.addEventListener('submit', onMovieUpdate);
}

async function showEditView(id) {

    removeChildrenFromParent(main);

    main.appendChild(section);

    const movie = await getMovie(id);

    fillForm(movie, formEl);

}

function fillForm(movie, formEl) {

    formEl.querySelector('input[name="title"]').value = movie.title;

    formEl.querySelector('textarea[name="description"]').value = movie.description

    formEl.querySelector('input[name="imageUrl"]').value = movie.img;

    formEl.querySelector('input[name="movie-id"]').value = movie._id;

}

async function onMovieUpdate(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const [title, description, img] = handleFormDataValues(formData);

        const movieId = formData.get('movie-id');

        ev.target.reset();

        await updateMovie(movieId, { title, description, img });

        showDetailsView(movieId);

    } catch (err) {

        alert(err);

    }

}

export { setUpEditView, showEditView };