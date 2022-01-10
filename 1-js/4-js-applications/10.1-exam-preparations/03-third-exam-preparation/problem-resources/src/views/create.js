import { html } from '../../node_modules/lit-html/lit-html.js';

import { createArticle } from '../services/articleService.js'

const createPageTemplate = (onArticleCreate) => html`
    <section id="create-page" class="content">
        <h1>Create Article</h1>
        <form @submit=${onArticleCreate} id="create" action="#" method="">
            <fieldset>
                <p class="field title">
                    <label for="create-title">Title:</label>
                    <input type="text" id="create-title" name="title" placeholder="Enter article title">
                </p>
                <p class="field category">
                    <label for="create-category">Category:</label>
                    <input type="text" id="create-category" name="category" placeholder="Enter article category">
                </p>
                <p class="field">
                    <label for="create-content">Content:</label>
                    <textarea name="content" id="create-content"></textarea>
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Create">
                </p>
            </fieldset>
        </form>
    </section>
`;

export async function renderCreatePage(ctx) {

    ctx.render(createPageTemplate(onArticleCreate));

    async function onArticleCreate(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const categories = ['JavaScript', 'C#', 'Java', 'Python'];

        const title = formData.get('title').trim();

        const category = formData.get('category').trim();

        const content = formData.get('content').trim();

        if (!title || !category || !content) {

            alert('Would you kindly fill all of the fields?');

            return;

        } else if (!categories.includes(category)) {

            alert('Invalid category!');

            return;

        }

        ev.target.reset();

        await createArticle({ title, category, content });

        ctx.page.redirect('/home');

    }

}