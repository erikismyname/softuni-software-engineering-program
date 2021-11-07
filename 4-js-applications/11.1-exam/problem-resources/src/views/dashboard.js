import { html } from '../../node_modules/lit-html/lit-html.js';

import { getAllBooks } from '../services/bookService.js';
import { bookTemplate } from './common/bookTemplate.js';

const dashboardPageTemplate = (books) => html`
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        ${books.length
        ? html`
        <ul class="other-books-list">
            ${books.map(bookTemplate)}
        </ul>`
        : html`<p class="no-books">No books in database!</p>`}
    </section>
`;

export async function renderDashboardPage(ctx) {

    const books = await getAllBooks();

    ctx.render(dashboardPageTemplate(books));

}