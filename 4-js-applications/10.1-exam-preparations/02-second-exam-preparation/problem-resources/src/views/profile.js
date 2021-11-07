import { html } from '../../node_modules/lit-html/lit-html.js';

import { carTemplate } from './common/carTemplate.js';
import { getMyCars } from '../services/carService.js';

const profilePageTemplate = (cars) => html`
    <section id="my-listings">
        <h1>My car listings</h1>
        <div class="listings">
            ${cars.length
            ? cars.map(carTemplate)
            : html`
            <p class="no-cars"> You haven't listed any cars yet.</p>
            `}
        </div>
    </section>
`;

export async function renderProfilePage(ctx) {

    const userId = ctx.getUserData('userId');

    const cars = await getMyCars(userId);

    ctx.render(profilePageTemplate(cars));

}