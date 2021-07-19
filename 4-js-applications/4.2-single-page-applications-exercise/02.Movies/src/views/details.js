import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { getMovieCard } from '../dom/getMovieCard.js';
import { getMovie, deleteMovie, } from '../services/movieService.js';
import { addLike, getMovieLikes, getUserLike } from '../services/likeService.js';
import { showEditView } from './edit.js';
import { showHomeView } from './home.js';

let main;
let section;

function setUpDetailsView(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

async function showDetailsView(id) {

    removeChildrenFromParent(main);

    removeChildrenFromParent(section);

    main.appendChild(section);

    const [movie, movieLikes, userLike] = await Promise.all([

        getMovie(id),

        getMovieLikes(id),

        getUserLike(id),

    ]);

    const movieCard = getMovieCard(movie, movieLikes, userLike, section);

    movieCard.addEventListener('click', handleMovieCardClick);

    section.appendChild(movieCard);

}

async function handleMovieCardClick(ev) {

    const target = ev.target;

    const targetId = ev.target.dataset.id;

    if (target.tagName == 'A') {

        ev.preventDefault();

        if (target.textContent == 'Delete') {

            const isConfirmed = confirm('Are you sure you want to delete this record?');

            if (isConfirmed) {

                try {

                    await deleteMovie(targetId);

                    showHomeView();

                } catch (err) {

                    alert(err);

                }

            }

        } else if (target.textContent == 'Edit') {

            showEditView(targetId);

        } else if (target.textContent == 'Like') {

            try {

                await addLike({ movieId: targetId });

                target.remove();

                const spanElLikes = section.querySelector('.enrolled-span');

                const movieLikes = await getMovieLikes(targetId);

                spanElLikes.textContent = `${movieLikes} ${movieLikes == 1 ? 'like' : 'likes'}`;

            } catch (err) {

                alert(err);

            }

        }

    }

}

export { setUpDetailsView, showDetailsView };