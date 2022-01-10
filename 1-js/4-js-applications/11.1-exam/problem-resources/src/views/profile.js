import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMyBooks } from '../services/bookService.js';
import { bookTemplate } from './common/bookTemplate.js';

const profilePageTemplate = (books) => html`
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        ${books.length
        ? html`
        <ul class="my-books-list">
            ${books.map(bookTemplate)}
        </ul>`
        : html`<p class="no-books">No books in database!</p>`}
    </section>
`;

export async function renderProfilePage(ctx) {

    const userId = ctx.getUserData('userId');

    const books = await getMyBooks(userId);

    ctx.render(profilePageTemplate(books));

}