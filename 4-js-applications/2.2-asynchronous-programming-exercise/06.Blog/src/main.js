import { getComments, getPost, getPosts } from './api.js';
import { displayOptions, displayPostDetails, getDOMElements } from './dom.js';

attachEventListeners();

function attachEventListeners() {

    const { btnElLoad, btnElView } = getDOMElements();

    btnElView.disabled = true;

    btnElLoad.addEventListener('click', onLoad);

    btnElView.addEventListener('click', onView);

}

async function onLoad(ev) {

    const { btnElView } = getDOMElements();

    btnElView.disabled = false;

    ev.target.disabled = true;

    try {

        const postsDetails = await getPosts();

        displayOptions(postsDetails);

    } catch (err) {

        alert(err);

    }

}

async function onView() {

    const { selectEl } = getDOMElements();

    const postId = selectEl.value;

    try {

        const [postData, postComments] = await Promise.all([

            getPost(postId),

            getComments(postId),

        ]);

        displayPostDetails(postData, postComments);

    } catch (err) {

        alert(err);

    }

}