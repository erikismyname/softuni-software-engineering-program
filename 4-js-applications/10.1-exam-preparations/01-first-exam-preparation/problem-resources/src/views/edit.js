import { html } from '../../node_modules/lit-html/lit-html.js';

import { notifyUser } from '../notification.js';
import { getOneMeme, updateMeme } from '../services/memeService.js';

const editPageTemplate = (meme, onMemeEdit) => html`
    <section id="edit-meme">
        <form @submit=${onMemeEdit} id="edit-form">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"
                    .value=${meme.description}></textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
`;

export async function displayEditPage(ctx) {
    
    ctx.setActiveNav();

    const memeId = ctx.params.id;

    try {

        const meme = await getOneMeme(memeId);

        ctx.render(editPageTemplate(meme, onMemeEdit));

    } catch (err) {

        alert(err);

    }

    async function onMemeEdit(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const title = formData.get('title').trim();

        const description = formData.get('description').trim();

        const imageUrl = formData.get('imageUrl').trim();

        try {

            if (!title || !description || !imageUrl) {

                throw new Error('Would you kindly fill all of the fields?');

            }

            ev.target.reset();

            await updateMeme(memeId, { title, description, imageUrl });

            ctx.page.redirect(`/details/${memeId}`);

        } catch (err) {


            notifyUser(err);

        }

    }

}