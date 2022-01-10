import { html } from '../../node_modules/lit-html/lit-html.js';

import { deleteCar, getOneCar } from '../services/carService.js';

const detailsPageTemplate = (car, onCarDelete, isOwner) => html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src=${car.imageUrl}>
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${car.brand}</li>
                <li><span>Model:</span>${car.model}</li>
                <li><span>Year:</span>${car.year}</li>
                <li><span>Price:</span>${car.price}</li>
            </ul>
            <p class="description-para">${car.description}</p>
            ${isOwner
                ? html`
                <div class="listings-buttons">
                <a href="/edit/${car._id}" class="button-list">Edit</a>
                <a @click=${onCarDelete} href="javascript:void(0)" class="button-list">Delete</a>
                </div>` : ''}
        </div>
    </section>
`;

export async function renderDetailsPage(ctx) {

    const carId = ctx.params.id;

    const car = await getOneCar(carId);

    const userId = ctx.getUserData('userId');

    const isOwner = car._ownerId == userId;

    ctx.render(detailsPageTemplate(car, onCarDelete, isOwner));

    async function onCarDelete() {

        const isConfirmed = confirm('Are you sure you want to delete this car?');

        if (isConfirmed) {

            await deleteCar(carId);

            ctx.page.redirect('/catalog');

        }

    }

}