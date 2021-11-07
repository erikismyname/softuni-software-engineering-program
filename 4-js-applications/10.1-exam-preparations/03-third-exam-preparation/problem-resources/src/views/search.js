import { html } from '../../node_modules/lit-html/lit-html.js';

import { filterArticles } from '../services/articleService.js';
import { articleTemplate } from './common/articleTemplate.js';

const searchPageTemplate = (onArticleSearch, articles) => html`
    <section id="search-page" class="content">
        <h1>Search</h1>
        <form @submit=${onArticleSearch} id="search-form">
            <p class="field search">
                <input id="search-input" type="text" placeholder="Search by article title" name="search">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Search">
            </p>
        </form>
        <div class="search-container">
        ${!articles.length 
            ? html`<h3 class="no-articles">No matching articles</h3>` : articles.map(articleTemplate)}
        </div>
    </section>
`;

export async function renderSearchPage(ctx) {

    const value = ctx.querystring.split('=')[1];

    const articles = !value ? [] : await filterArticles(value); 

    ctx.render(searchPageTemplate(onArticleSearch, articles));

    async function onArticleSearch(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const title = formData.get('search').trim();

        ctx.page.redirect('/search?query=' + title);

    }

}

