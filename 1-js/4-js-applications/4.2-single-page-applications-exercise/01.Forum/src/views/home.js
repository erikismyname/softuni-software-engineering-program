import { removeChildrenFromParent } from '../dom/appendAndRemoveChildren.js';
import { handleFormDataValues } from '../util/handleFormData.js';
import { getPosts, createPost, getPost } from '../services/postService.js';
import { renderPosts } from '../dom/renderPosts.js';
import { showCommentsView } from './comments.js';

let sectionEl;
let targetEl;

function setUpHomeView(sectionElInput, targetElInput) {
    sectionEl = sectionElInput;
    targetEl = targetElInput;
    targetEl.addEventListener('click', handleClick);
    targetEl.querySelector('form').addEventListener('submit', onPostCreate);
    targetEl.querySelector('#cancel-btn').addEventListener('click', onPostCancel);
}

async function showHomeView() {

    removeChildrenFromParent(sectionEl);

    sectionEl.appendChild(targetEl);

    const posts = await getPosts();

    renderPosts(posts);

}

async function onPostCreate(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const [title, username, description] = handleFormDataValues(formData);

        ev.target.reset();

        await createPost({ title, username, description, time: new Date() });

        showHomeView();

    } catch (err) {

        alert(err);

    }

}

function onPostCancel(ev) {

    ev.preventDefault()

    const formEl = ev.target.parentElement.parentElement;

    formEl.reset();

}

function handleClick(ev) {

    if (ev.target.tagName == 'H2') {

        displayPostDetails(ev);

    }

}

async function displayPostDetails(ev) {

    ev.preventDefault();

    const postId = ev.target.parentElement.dataset.id;

    try {

        const post = await getPost(postId);

        showCommentsView(post);

    } catch (err) {

        alert(err);

    }

}

export { setUpHomeView, showHomeView };