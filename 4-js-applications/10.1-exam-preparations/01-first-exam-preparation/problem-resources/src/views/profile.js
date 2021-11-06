import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMyMemes } from '../services/memeService.js';

const profilePageTemplate = (myMemes, userData) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src=${'/images/' + userData.gender + '.png'}>
            <div class="user-content">
                <p>Username: ${userData.username}</p>
                <p>Email: ${userData.email}</p>
                <p>My memes count: ${myMemes.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
            ${myMemes.length ?
            myMemes.map(memeTemplate) :
            html`<p class="no-memes">No memes in database.</p>`}
        </div>
    </section>
`;

const memeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
        <a class="button" href=${'/details/' + meme._id}>Details</a>
    </div>
`;

export async function displayProfilePage(ctx) {
    
    ctx.setActiveNav(ctx.pathname);

    const userData = {
        gender: sessionStorage.getItem('userGender'),
        username: sessionStorage.getItem('username'),
        email: sessionStorage.getItem('userEmail'),
    };

    try {

        const myMemes = await getMyMemes();

        ctx.render(profilePageTemplate(myMemes, userData));

    } catch (err) {

        alert(err);

    }

}