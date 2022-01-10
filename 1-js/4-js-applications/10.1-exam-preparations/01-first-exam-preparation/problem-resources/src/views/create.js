import { html } from '../../node_modules/lit-html/lit-html.js';

import { createMeme } from '../services/memeService.js';
import { notifyUser } from '../notification.js';

const createPageTemplate = (onMemeCreate) => html`
    <section id="create-meme">
        <form @submit=${onMemeCreate} id="create-form">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>

`;

export async function displayCreatePage(ctx) {

    ctx.setActiveNav(ctx.pathname);

    ctx.render(createPageTemplate(onMemeCreate));

    async function onMemeCreate(ev) {

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

            await createMeme({ title, description, imageUrl });

            ctx.page.redirect('/catalog');

        } catch (err) {

            notifyUser(err);

        }

    }

}