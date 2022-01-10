import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getOneTeam } from '../services/teamService.js';
import { joinTeamRequest, cancelMembership, getRequestsByTeamId, approveMembership } from '../services/membersService.js';
import { loaderTemplate } from './common/loader.js';

const detailsPageTemplate = (team, createControls, pendingPeople, isOwner, members) => html`
    <section id="team-home">
        <article class="layout">
            <img src=${team.logoUrl} class="team-logo left-col">
            <div class="tm-preview">
                <h2>${team.name}</h2>
                <p>${team.description}</p>
                <span class="details">${team.membersCount}</span>
                <div>
                    ${createControls()}
                </div>
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${members.map(m => memberTemplate(m, isOwner))}
                </ul>
            </div>
            ${isOwner ? html`
            <div class="pad-large">
                <h3>Membership Requests</h3>
                <ul class="tm-members">
                    ${pendingPeople.map(pendingMemberTemplate)}
                </ul>
            </div>
            ` : ''}
        </article>
    </section>
`;

const memberTemplate = (request, isOwner) => html`
    <li>
        ${request.user.username}
        ${isOwner ? html`<a @click=${request.decline} href="javascript:void(0)" class="tm-control action">Remove from team</a>` : ''}
    </li>
`;

const pendingMemberTemplate = request => html`
    <li>${request.user.username}
        <a @click=${request.approve} href="javascript:void(0)" class="tm-control action">Approve</a>
        <a @click=${request.cancel} href="javascript:void(0)" class="tm-control action">Decline</a>
    </li>
`;

export async function displayDetailsPage(ctx) {

    const teamId = ctx.params.id;

    ctx.render(until(populateTemplate(teamId), loaderTemplate()));

    async function populateTemplate(teamId) {

        const userId = sessionStorage.getItem('userId');

        const [team, requests] = await Promise.all([
            getOneTeam(teamId),
            getRequestsByTeamId(teamId),
        ]);

        requests.forEach(r => {

            r.approve = () => onUserApprove(r);

            r.cancel = () => onUserCancel(r._id);

        });

        const isOwner = userId == team._ownerId;

        const members = requests.filter(r => r.status == 'member');

        team.membersCount = members.length;

        const pendingPeople = requests.filter(r => r.status == 'pending')
            
        function createControls() {

            const request = requests.find(r => r._ownerId == userId);

            if (!userId) {

                return;

            } else if (isOwner) {

                return html`<a href=${`/edit/${team._id}`} class="action">Edit team</a>`;

            } else if (request && request.status == 'member') {

                return html`<a @click=${e=> onUserCancel(request._id)} href="javascript:void(0)" class="action invert">Leave team</a>`;

            } else if (request && request.status == 'pending') {

                return html`Pending... <a @click=${e=> onUserCancel(request._id)} href="javascript:void(0)">Cancel request</a>`;

            } else {

                return html`<a @click=${onUserJoin} href="javascript:void(0)" class="action"> Join team</a>`;

            }

        }

        return detailsPageTemplate(team, createControls, pendingPeople, isOwner, members);

        async function onUserJoin() {

            await joinTeamRequest({ teamId });

            ctx.render(await populateTemplate(teamId));

        }

        async function onUserCancel(requestId) {

            const isConfirmed = confirm('Are you sure?');

            if (isConfirmed) {

                await cancelMembership(requestId);

                ctx.render(await populateTemplate(teamId));

            }

        }

        async function onUserApprove(request) {

            await approveMembership(request);

            ctx.render(await populateTemplate(teamId));

        }

    }

}