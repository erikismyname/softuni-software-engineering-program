import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllTeams } from '../services/teamService.js';
import { getAllMembers } from '../services/membersService.js';
import { teamTemplate } from './common/team.js';

const browsePageTemplate = (teams) => html`
    <section id="browse">
        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>
        <article class="layout narrow">
            <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
        </article>
        ${teams.map(teamTemplate)}
    </section>
`;

export async function displayBrowsePage(ctx) {

    const teams = await getAllTeams();

    const members = await getAllMembers(teams.map(t => t._id));

    teams.forEach(t => t.memberCount = members.filter(m => m.teamId == t._id).length);

    ctx.render(browsePageTemplate(teams));

}