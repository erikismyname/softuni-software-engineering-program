import { html } from '../../node_modules/lit-html/lit-html.js';

import { getOneBook, deleteBook } from '../services/bookService.js';
import { likeABook, getBookLikes, getUserLike } from '../services/likesService.js';

const detailsPageTemplate = (book, userId, isOwner, onBookDelete, onBookLike, isLiked, bookLikes) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <div class="actions">
                ${isOwner
                ? html`
                <a class="button" href="/edit/${book._id}">Edit</a>
                <a @click=${onBookDelete} class="button" href="javascript:void(0)">Delete</a>`
                : ''}
                ${userId && !isOwner && !isLiked
                ? html`<a @click=${onBookLike} class="button" href="javascript:void(0)">Like</a>`
                : ''}
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${bookLikes}</span>
                </div>
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>
`;

export async function renderDetailsPage(ctx) {

    const bookId = ctx.params.id;

    const book = await getOneBook(bookId);

    const userId = ctx.getUserData('userId');

    const isOwner = userId == book._ownerId;

    const isLiked = userId ? await getUserLike(bookId, userId) : false;

    const bookLikes = await getBookLikes(bookId);

    ctx.render(detailsPageTemplate(book, userId, isOwner, onBookDelete, onBookLike, isLiked, bookLikes));

    async function onBookDelete() {

        const isConfirmed = confirm('Are you sure you want to delete this book?');

        if (isConfirmed) {

            await deleteBook(bookId);

            ctx.page.redirect('/dashboard');

        }

    }

    async function onBookLike(ev) {

        await likeABook({ bookId });

        ev.target.remove();

        document.querySelector('#total-likes').textContent = `Likes: ${bookLikes + 1}`;

    }

}