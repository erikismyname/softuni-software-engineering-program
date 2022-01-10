import { html } from '../../node_modules/lit-html/lit-html.js';
import { createTeam } from '../services/teamService.js';

const createPageTemplate = (onTeamCreate, errorMsg) => html`
    <section id="create">
        <article class="narrow">
            <header class="pad-med">
                <h1>New Team</h1>
            </header>
            <form @submit=${onTeamCreate} id="create-form" class="main-form pad-large">
                ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
                <label>Team name: <input type="text" name="name"></label>
                <label>Logo URL: <input type="text" name="logoUrl"></label>
                <label>Description: <textarea name="description"></textarea></label>
                <input class="action cta" type="submit" value="Create Team">
            </form>
        </article>
    </section>
`;

export async function displayCreatePage(ctx) {

    ctx.render(createPageTemplate(onTeamCreate));

    async function onTeamCreate(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const name = formData.get('name').trim();

        const logoUrl = formData.get('logoUrl').trim();

        const description = formData.get('description').trim();

        try {

            if (!name || !logoUrl || !description) {

                throw new Error('Would you kindly fill all of the required fields?');

            } else if (name.length < 4) {

                throw new Error('Team name should be at least 4 characters long!');

            } else if (description.length < 10) {

                throw new Error('Description length should be at least 10 characters long!');

            }

            const team = await createTeam({ name, logoUrl, description });

            ev.target.reset(); // Not needed?

            ctx.page.redirect(`/details/${team._id}`);

        } catch (err) {

            ctx.render(createPageTemplate(onTeamCreate, err));

        }

    }

}