import { html } from '../../node_modules/lit-html/lit-html.js';

import { getOneArticle, editArticle } from '../services/articleService.js';

const editPageTemplate = (article, onArticleEdit) => html`
    <section id="edit-page" class="content">
        <h1>Edit Article</h1>
        <form @submit=${onArticleEdit} id="edit" action="#" method="">
            <fieldset>
                <p class="field title">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Enter article title" .value=${article.title}>
                </p>
                <p class="field category">
                    <label for="category">Category:</label>
                    <input type="text" name="category" id="category" placeholder="Enter article category"
                        .value=${article.category}>
                </p>
                <p class="field">
                    <label for="content">Content:</label>
                    <textarea name="content" id="content" .value=${article.content}></textarea>
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Save Changes">
                </p>
            </fieldset>
        </form>
    </section>
`;

export async function renderEditPage(ctx) {

    const articleId = ctx.params.id;

    const article = await getOneArticle(articleId);

    ctx.render(editPageTemplate(article, onArticleEdit));

    async function onArticleEdit(ev) {

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

        await editArticle(articleId, { title, category, content });

        ctx.page.redirect('/details/' + articleId);

    }

}