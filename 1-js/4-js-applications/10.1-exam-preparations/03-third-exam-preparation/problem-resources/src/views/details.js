import { html } from '../../node_modules/lit-html/lit-html.js';

import { getOneArticle, deleteArticle } from '../services/articleService.js';

const detailsPageTemplate = (article, isOwner, onArticleDelete) => html`
    <section id="details-page" class="content details">
        <h1>${article.title}</h1>
        <div class="details-content">
            <strong>Published in category ${article.category}</strong>
            <p>${article.content}</p>
            <div class="buttons">
                ${isOwner ? html`
                <a @click=${onArticleDelete} href="javascript:void(0)" class="btn delete">Delete</a>
                <a href="/edit/${article._id}" } class="btn edit">Edit</a>` : ''}
                <a href="/home" class="btn edit">Back</a>
            </div>
        </div>
    </section>
`;

export async function renderDetailsPage(ctx) {

    const articleId = ctx.params.id;

    const article = await getOneArticle(articleId);

    const userId = ctx.getUserData('userId');

    const isOwner = userId == article._ownerId;

    ctx.render(detailsPageTemplate(article, isOwner, onArticleDelete));

    async function onArticleDelete() {

        const isConfirmed = confirm('Are you sure you want ot delete this article?');

        if (isConfirmed) {

            await deleteArticle(articleId);

            ctx.page.redirect('/home')

        }

    }

}