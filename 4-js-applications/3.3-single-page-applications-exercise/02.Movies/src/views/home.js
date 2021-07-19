import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { setUserNavigation } from './nav.js';
import { getAllMovies } from '../services/movieService.js';
import { renderMovies } from '../dom/renderMovies.js';
import { showDetailsView } from './details.js';

let main;
let section;
let divElMoviesContainer;

function setUpHomeView(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    divElMoviesContainer = document.querySelector('.card-deck');
    divElMoviesContainer.addEventListener('click', onShowMovieDetails);
}

async function showHomeView() {

    removeChildrenFromParent(main);

    main.appendChild(section);

    setUserNavigation();

    document.querySelector('#create-link').style.display = sessionStorage.getItem('authToken') ? 'inline-block' : 'none';

    const movies = await getAllMovies();

    renderMovies(movies, divElMoviesContainer);

}

function onShowMovieDetails(ev) {

    if (ev.target.tagName == 'BUTTON') {

        ev.preventDefault();

        showDetailsView(ev.target.dataset.id);

    }

}

export { setUpHomeView, showHomeView };