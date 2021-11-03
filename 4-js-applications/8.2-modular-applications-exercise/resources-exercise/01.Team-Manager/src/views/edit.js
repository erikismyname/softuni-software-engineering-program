import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getOneTeam, updateTeam } from '../services/teamService.js';
import { loaderTemplate } from './common/loader.js';

const editPageTemplate = (team, onTeamUpdate, errorMsg) => html`
    <section id="edit">
        <article class="narrow">
            <header class="pad-med">
                <h1>Edit Team</h1>
            </header>
            <form @submit=${onTeamUpdate} id="edit-form" class="main-form pad-large">
                ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
                <label>Team name: <input type="text" name="name" .value=${team.name}></label>
                <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}></label>
                <label>Description: <textarea name="description">${team.description}</textarea></label>
                <input class="action cta" type="submit" value="Save Changes">
            </form>
        </article>
    </section>
`;

export async function displayEditPage(ctx) {

    const teamId = ctx.params.id;

    ctx.render(until(populateTemplate(teamId), loaderTemplate()));

    async function populateTemplate(teamId) {

        const team = await getOneTeam(teamId);

        return editPageTemplate(team, onTeamUpdate);

        async function onTeamUpdate(ev) {

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

                await updateTeam(teamId, { name, logoUrl, description });

                ev.target.reset(); // Not needed?

                ctx.page.redirect(`/details/${teamId}`);

            } catch (err) {

                ctx.render(editPageTemplate(team, onTeamUpdate, err));

            }

        }

    }

}