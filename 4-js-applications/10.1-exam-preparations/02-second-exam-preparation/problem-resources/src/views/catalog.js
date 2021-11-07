import { html } from '../../node_modules/lit-html/lit-html.js';

import { getAllCars } from '../services/carService.js';
import { carTemplate } from './common/carTemplate.js';

const catalogPageTemplate = (cars) => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
            ${cars.length
            ? cars.map(carTemplate)
            : html`<p class="no-cars">No cars in database.</p>`}
        </div>
    </section>
`;

export async function renderCatalogPage(ctx) {

    const cars = await getAllCars();

    ctx.render(catalogPageTemplate(cars));

}