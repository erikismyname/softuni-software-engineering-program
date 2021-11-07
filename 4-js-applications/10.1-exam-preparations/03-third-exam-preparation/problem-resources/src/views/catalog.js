import { html } from '../../node_modules/lit-html/lit-html.js';

import { getAllArticles } from '../services/articleService.js';
import { articleTemplate } from './common/articleTemplate.js';

const catalogPageTemplate = (articles) => html`
    <section id="catalog-page" class="content catalogue">
        <h1>All Articles</h1>
        ${!articles.length ? html`<h3 class="no-articles">No articles yet</h3>` : articles.map(articleTemplate)}
    </section>
`;

export async function renderCatalogPage(ctx) {

    const articles = await getAllArticles();

    ctx.render(catalogPageTemplate(articles));

}