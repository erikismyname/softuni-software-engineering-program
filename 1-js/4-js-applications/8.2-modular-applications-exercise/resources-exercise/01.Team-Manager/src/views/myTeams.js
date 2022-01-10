import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyTeams } from '../services/teamService.js';
import { getAllMembers } from '../services/membersService.js';
import { teamTemplate } from './common/team.js';

const myTeamsPageTemplate = (teams) => html`
    <section id="my-teams">
        <article class="pad-med">
            <h1>My Teams</h1>
        </article>
        ${!teams.length ? html`
        <article class="layout narrow">
            <div class="pad-med">
                <p>You are not a member of any team yet.</p>
                <p><a href="/browse">Browse all teams</a> to join one, or use the button bellow to cerate your own
                    team.</p>
            </div>
            <div class=""><a href="/create" class="action cta">Create Team</a></div>
        </article>
        ` : ''}
        ${teams.map(teamTemplate)}
    </section>
`;

export async function displayMyTeamsPage(ctx) {

    const teams = await getMyTeams();

    const members = await getAllMembers(teams.map(t => t._id));

    teams.forEach(t => t.memberCount = members.filter(m => m.teamId == t._id).length);

    ctx.render(myTeamsPageTemplate(teams));

}