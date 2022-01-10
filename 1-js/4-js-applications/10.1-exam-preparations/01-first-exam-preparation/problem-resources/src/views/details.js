import { html } from '../../node_modules/lit-html/lit-html.js';

import { getOneMeme, deleteMeme } from '../services/memeService.js';

const detailsPageTemplate = (meme, isOwner, onMemeDelete) => html`
    <section id="meme-details">
        <h1>Meme Title: ${meme.title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src=${meme.imageUrl}>
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>
                    ${meme.description}
                </p>
                ${isOwner ? 
                html`
                <a class="button warning" href=${'/edit/' + meme._id}>Edit</a>
                <button @click=${onMemeDelete} class="button danger">Delete</button>` : ''}
            </div>
        </div>
    </section>
`;

export async function displayDetailsPage(ctx) {

    ctx.setActiveNav();

    const userId = sessionStorage.getItem('userId');

    const memeId = ctx.params.id;

    try {

        const meme = await getOneMeme(memeId);

        const isOwner = userId == meme._ownerId;

        ctx.render(detailsPageTemplate(meme, isOwner, onMemeDelete));

    } catch (err) {

        alert(err);

    }

    async function onMemeDelete() {

        const isConfirmed = confirm('Are you sure you want to delete this meme?');

        if (isConfirmed) {

            await deleteMeme(memeId); 
            
            ctx.page.redirect('/catalog');
            
        }

    }

}