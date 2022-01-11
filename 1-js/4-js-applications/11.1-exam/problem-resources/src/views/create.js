import { html } from '../../node_modules/lit-html/lit-html.js';

import { createBook } from '../services/bookService.js';

const createPageTemplate = (onBookCreate) => html`
    <section id="create-page" class="create">
        <form @submit=${onBookCreate} id="create-form" action="" method="">
            <fieldset>
                <legend>Add new Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" placeholder="Title">
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image">
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type">
                            <option value="Fiction">Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Add Book">
            </fieldset>
        </form>
    </section>
`;

export async function renderCreatePage(ctx) {

    ctx.render(createPageTemplate(onBookCreate));

    async function onBookCreate(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const title = formData.get('title').trim();

        const description = formData.get('description').trim();

        const imageUrl = formData.get('imageUrl').trim();

        const type = formData.get('type');

        if (!title || !description || !imageUrl) {

            alert('Would you kindly fill all of the fields?');

            return;

        }

        await createBook({ title, description, imageUrl, type });

        ev.target.reset();

        ctx.page.redirect('/dashboard');

    }

}